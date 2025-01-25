import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavbarAuth from "@/components/NavbarAuth";
// import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas | Procurement Dashboard",
  description: "An efficient procurement system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-[#626F86]`} cz-shortcut-listen="true">
        <div className="flex h-screen">
          {/* <Sidebar /> */}
          <div className="flex-1 flex flex-col">
            <NavbarAuth />
            <main className="">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
