import os
import requests

# Secrets retrieval
DUFFEL_TOKEN = os.getenv("DUFFEL_API_TOKEN")
TRAVELPORT_CLIENT_ID = os.getenv("TRAVELPORT_CLIENT_ID")

class B2BFlightEngine:
    def __init__(self, markup_percentage=5.0):
        self.markup = markup_percentage  # 5% Markup for Profit Margin

    def apply_markup(self, net_price):
        """Net Rate par profit margin add karne ke liye"""
        final_price = net_price * (1 + (self.markup / 100))
        return round(final_price, 2)

    def fetch_duffel_net_rates(self, origin, destination, date):
        url = "https://api.duffel.com/air/offer_requests"
        headers = {
            "Authorization": f"Bearer {DUFFEL_TOKEN}",
            "Duffel-Version": "v2",
            "Content-Type": "application/json"
        }
        payload = {
            "data": {
                "slices": [{"origin": origin, "destination": destination, "departure_date": date}],
                "passengers": [{"type": "adult"}],
                "cabin_class": "economy"
            }
        }
       
        res = requests.post(url, json=payload, headers=headers)
        if res.status_code == 201:
            offers = res.json().get("data", {}).get("offers", [])
            processed_offers = []
           
            for offer in offers:
                net_amount = float(offer["total_amount"])
                customer_price = self.apply_markup(net_amount)
               
                processed_offers.append({
                    "id": offer["id"],
                    "airline": offer["owner"]["name"],
                    "net_rate": net_amount,
                    "customer_price": customer_price,
                    "currency": offer["total_currency"]
                })
            return processed_offers
        return []

# Engine Testing
if __name__ == "__main__":
    engine = B2BFlightEngine(markup_percentage=7.0) # 7% profit margin
    results = engine.fetch_duffel_net_rates("LHE", "DXB", "2026-10-25")
    print("B2B Dynamic Pricing Results:", results[:2])
