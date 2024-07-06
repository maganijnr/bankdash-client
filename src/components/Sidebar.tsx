"use client";
import Image from "next/image";
import React from "react";
import { BankDashLogo } from "../../public";
import Link from "next/link";
import { PiHouseFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaRegCreditCard, FaUser } from "react-icons/fa";
import { FaChartSimple, FaHandHoldingDollar } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
	const sidebarLinks = [
		{
			path: "/",
			label: "Dashboard",
			icon: <PiHouseFill size={24} />,
		},
		{
			path: "/transactions",
			label: "Transactions",
			icon: <GrTransaction size={24} />,
		},
		{
			path: "/accounts",
			label: "Accounts",
			icon: <FaUser size={24} />,
		},
		{
			path: "/investments",
			label: "Investments",
			icon: <FaChartSimple size={24} />,
		},
		{
			path: "/credit-cards",
			label: "Credit Cards",
			icon: <FaRegCreditCard size={24} />,
		},
		{
			path: "/loans",
			label: "Loans",
			icon: <FaHandHoldingDollar size={24} />,
		},
		{
			path: "/services",
			label: "Services",
			icon: <RiCustomerService2Line size={24} />,
		},
		{
			path: "/privileges",
			label: "My Privileges",
			icon: <MdOutlinePrivacyTip size={24} />,
		},
		{
			path: "/setting",
			label: "Setting",
			icon: <IoSettingsOutline size={24} />,
		},
	];

	return (
		<div className="fixed top-0 left-0 h-screen max-h-screen bg-white w-[250px] py-5 border-r border-[#E6EFF5]">
			<div className="w-full flex items-center justify-center">
				<Link href="/">
					<div className="w-[183px] h-[36px] relative">
						<Image
							src={BankDashLogo}
							alt="logo"
							layout="fill"
							objectFit="cover"
						/>
					</div>
				</Link>
			</div>

			<div className="mt-5 flex flex-col gap-4">
				{sidebarLinks.map((link, index) => (
					<SidebarItem
						key={index}
						label={link.label}
						icon={link.icon}
						path={link.path}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
