import { Poppins } from "next/font/google";
import "./globals.css";
import CustomNavBar from "../../components/NavBar/CustomNavBar";
import Footer from "../../components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "UXMCS Museum",
  description: "Best Museum in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="wrapper">
          <CustomNavBar />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
