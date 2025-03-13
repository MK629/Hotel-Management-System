import Header from "@/utilComponents/foundation/Header";
import './global.css'
import Footer from "@/utilComponents/foundation/Footer";
import Loading from "@/utilComponents/statusMessages/Loading";
import GlobalContextManager from "@/contexts/GlobalContextManager";
import { Suspense } from "react";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className='bg-[#2D2D2D]'>
        <div>
          <GlobalContextManager>
            <div className="min-h-screen">
            <Header/>
              <Suspense fallback={<Loading/>}>
                {children}
              </Suspense>
            </div>
            <Footer/>
          </GlobalContextManager>
        </div>
      </body>
    </html>
  );
}
