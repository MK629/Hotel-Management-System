import Header from "@/pageComponents/layout/Header";
import './global.css'
import Footer from "@/pageComponents/layout/Footer";
import GlobalContextManager from "@/context/GlobalContextManager";

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
