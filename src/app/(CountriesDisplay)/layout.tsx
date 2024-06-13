import Navbar from "./_components/Navbar";

export default function CountriesDisplayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="h-full bg-slate-50">
        {children}  
        </main>
      </body>
    </html>
  );
}