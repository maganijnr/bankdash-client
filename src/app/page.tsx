export default function Home() {
	return (
		<main className="mx-auto w-[97%] h-full py-5">
			<div className="w-full flex items-start gap-5">
				<div className="w-[65%]">
					<div>
						<h2 className="text-[#343C6A] font-medium text-2xl">
							My cards
						</h2>
					</div>
					<div className="w-full flex items-start justify-start gap-5"></div>
				</div>
				<div className="w-[35%]">
					<h2 className="text-[#343C6A] font-medium text-2xl">
						Recent Transactions
					</h2>
				</div>
			</div>
		</main>
	);
}
