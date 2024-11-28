// app/layout.tsx

import Footer from '@/components/Footer';
import './globals.css';  // Import global styles

// Root layout component, wrapping the entire page structure
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
       

        {/* Main content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}


