import Header from "@/utilComponents/Header";
import './global.css'
import Footer from "@/utilComponents/Footer";
import GlobalContextManager from "@/contexts/GlobalContextManager";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className='bg-[#2D2D2D]'>
        <div>
          <GlobalContextManager>
            <div className="min-h-screen">
            <Header/>
            {children}
            </div>
            <Footer/>
          </GlobalContextManager>
        </div>
      </body>
    </html>
  );
}
