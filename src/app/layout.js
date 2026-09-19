export const metadata = {
  title: 'Aetros PulseTrips - B2B Travel Portal',
  description: 'Wholesale flights and hotel booking platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  )
}
