"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
	const location = usePathname();

	const currentPage = location.split("/")[1]
		? location.split("/")[1] === "credit-cards"
			? "Credit Cards"
			: location.split("/")[1] === "privileges"
			? "My Privileges"
			: location.split("/")[1]
		: "Overview";

	return (
		<div className="sticky left-0 right-0 h-[60px] bg-white border-b border-[#E6EFF5]">
			<div className=" mx-auto w-[97%] h-full bg-transparent flex items-center justify-between">
				<h2 className="font-medium text-2xl capitalize text-[#343C6A]">
					{currentPage}
				</h2>
			</div>
		</div>
	);
};

export default Navbar;
