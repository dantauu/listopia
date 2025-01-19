import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import LeftMenu from "@/intities/ui/left-menu/left-menu";
import '../app/styles/globals.scss'

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Listopia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode }>) {
  return (
		<html lang='ru'>
			<body className={`${geistSans.variable}`}>
        <LeftMenu />
				{children}
			</body>
		</html>
	)
}
