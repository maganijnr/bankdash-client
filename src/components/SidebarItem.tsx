"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";

const SidebarItem: FC<{
	path: string;
	label: string;
	icon: any;
}> = ({ path, label, icon }) => {
	const location = usePathname();

	const active = useMemo(() => {
		const pagePath = path.toLowerCase();

		if (location.split("/")[1] === "") {
			if (label === "Dashboard") {
				return true;
			}
		} else {
			if (location.includes(pagePath) && label !== "Dashboard") {
				return true;
			} else {
				return false;
			}
		}
	}, [location, path]);

	return (
		<Link href={path}>
			<div
				className={twMerge(
					`${
						active ? "active-item text-[#2D60FF]" : "text-[#B1B1B1]"
					} w-full flex items-center justify-start pl-10 gap-5 h-[50px] `
				)}
			>
				{icon}
				<h2>{label}</h2>
			</div>
		</Link>
	);
};

export default SidebarItem;
