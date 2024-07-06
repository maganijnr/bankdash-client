import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="bg-red-400 flex items-start relative">
					<Sidebar />
					<div className="absolute top-0 right-0 w-[calc(100%-250px)] bg-[#F5F7FA] h-full min-h-screen">
						<Navbar />
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
