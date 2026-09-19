export const metadata = {
  title: 'Aetros PulseTrips - B2B Travel Portal',
  description: 'Wholesale flights and hotel booking platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
