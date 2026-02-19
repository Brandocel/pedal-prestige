import logoGroup from "../assets/foter/Group.svg";

export default function Footer() {
	return (
		<footer className="w-full">
			<div className="grid min-h-[clamp(420px,32.92vw,474px)] w-full grid-cols-[34.85%_1fr] max-lg:grid-cols-1">
				<div className="flex items-center justify-center bg-[var(--prestige-ivory)] px-[20px] py-[48px]">
					<img
						src={logoGroup}
						alt="Pedal Prestige"
						className="h-auto w-[clamp(130px,10.9vw,157px)]"
						draggable={false}
					/>
				</div>

				<div
					className="bg-[#071727] px-[clamp(20px,7.4vw,106px)] py-[clamp(44px,6.66vw,96px)] text-[var(--prestige-ivory)]"
					style={{
						background:
							"linear-gradient(90deg, #061625 0%, #071A2B 55%, #061625 100%)",
					}}
				>
					<div className="grid grid-cols-[minmax(240px,1.15fr)_minmax(120px,0.7fr)_minmax(170px,0.9fr)] gap-x-[clamp(28px,6vw,86px)] gap-y-[32px] max-lg:grid-cols-2 max-sm:grid-cols-1">
						<div>
							<h3
								className="text-[clamp(20px,1.8056vw,26px)] leading-[1] italic tracking-[0]"
								style={{
									fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
									fontWeight: 600,
								}}
							>
								Contact us
							</h3>

							<div
								className="mt-[clamp(18px,1.66vw,24px)] space-y-[8px] text-[clamp(15px,1.111vw,16px)] leading-[1.75] tracking-[0]"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif", fontWeight: 400 }}
							>
								<p>T: (998) 000 0000</p>
								<p>E: info@pedal-prestige.com</p>
								<p>◎&nbsp; pedal_prestige</p>
							</div>
						</div>

						<nav
							className="text-[clamp(15px,1.111vw,16px)] leading-[1.75] tracking-[0]"
							style={{ fontFamily: "Hubballi, system-ui, sans-serif", fontWeight: 400 }}
							aria-label="Footer navigation"
						>
							<ul>
								<li><a href="#home">HOME</a></li>
								<li><a href="#about">ABOUT</a></li>
								<li><a href="#experiences">EXPERIENCES</a></li>
								<li><a href="#discover">DISCOVER</a></li>
								<li><a href="#contact">CONTACT</a></li>
							</ul>
						</nav>

						<nav
							className="text-[clamp(15px,1.111vw,16px)] leading-[1.75] tracking-[0]"
							style={{ fontFamily: "Hubballi, system-ui, sans-serif", fontWeight: 400 }}
							aria-label="Footer legal"
						>
							<ul>
								<li><a href="/terms">Terms & conditions</a></li>
								<li><a href="/privacy">Privacy policy</a></li>
								<li><a href="/disclaimer">Disclaimer</a></li>
							</ul>
						</nav>
					</div>

					<p
						className="mt-[clamp(46px,7vw,101px)] text-[clamp(12px,0.972vw,14px)] leading-[1.2] tracking-[0.02em] text-[#9DAAB7]"
						style={{ fontFamily: "Hubballi, system-ui, sans-serif", fontWeight: 400 }}
					>
						Pedal Prestige © All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
