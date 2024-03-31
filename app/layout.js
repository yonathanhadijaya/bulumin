import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./ui/globals.css";
import "./ui/output.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Bulu Bulu Admin",
  description: "Next.js Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
