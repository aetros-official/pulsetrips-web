mport streamlit as st
from b2b_engine import B2BFlightEngine

# Streamlit Page Setup
st.set_page_config(page_title="PulseTrips - B2B Travel Portal", page_icon="✈️", layout="wide")

st.title("✈️ PulseTrips Travel Portal")
st.subheader("Find and book flights with direct B2B pricing")

# Search Bar Form
with st.form("flight_search_form"):
    col1, col2, col3, col4 = st.columns(4)
    with col1:
        origin = st.text_input("From (Airport Code)", value="LHE")
    with col2:
        destination = st.text_input("To (Airport Code)", value="DXB")
    with col3:
        dep_date = st.date_input("Departure Date")
    with col4:
        markup = st.slider("Markup Margin (%)", min_value=0, max_value=20, value=7)
       
    submit = st.form_submit_button("Search Flights")

# Search Execution
if submit:
    st.info(f"Searching flights from {origin} to {destination}...")
   
    # B2B Engine Call
    engine = B2BFlightEngine(markup_percentage=markup)
    flights = engine.fetch_duffel_net_rates(origin, destination, str(dep_date))
   
    if flights:
        st.success(f"Found {len(flights)} flights!")
        for flight in flights:
            with st.container():
                st.markdown("---")
                c1, c2, c3, c4 = st.columns(4)
                c1.write(f"**Airline:** {flight['airline']}")
                c2.write(f"**Net Rate:** ${flight['net_rate']}")
                c3.write(f"**Customer Price:** ${flight['customer_price']}")
                c4.button("Book Now", key=flight['id'])
    else:
        st.warning("No flights found or invalid API keys configuration.")
