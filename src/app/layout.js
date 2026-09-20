import './globals.css';

export const metadata = {
  title: 'Aetros Pulsetrips - B2B Global Travel Network',
  description: 'Wholesale scale travel bookings, flights, stays, and affiliate networks.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#040812] text-white antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
