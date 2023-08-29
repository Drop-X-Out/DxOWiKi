import "./globals.css";
import { Montserrat_Subrayada } from "next/font/google";
import Navbar from "@/components/Navbar";

const mont = Montserrat_Subrayada({ weight:'700',
preload:false });

export const metadata = {
  title: "DxO Wiki",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mont.className} bg-[#2c2c2c] text-white`}>
        <div className="flex flex-col h-screen m-10">
        <Navbar/>
        <div className="pt-10 border-t border-white">
        {children}
        </div>
        </div>
        </body>
    </html>
  );
}
