import "./globals.css";
import { Montserrat, Newsreader } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
});

const news = Newsreader({
  subsets: ["latin"],
  variable: "--font-news",
  display: "swap",
});

export const metadata = {
  title: "Michael Zhao",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` bg-grey scroll-smooth ${mont.variable} ${news.variable}`}>
      <body>{children}</body>
    </html>
  );
}
