export default function Contact() {
	const formSubmitEmail = "info@pedalprestige.com.mx";
	const formSubmitAction = `https://formsubmit.co/${formSubmitEmail}`;
	const formSubmitNext =
		typeof window !== "undefined"
			? `${window.location.origin}/#contact-success`
			: "/#contact-success";

	return (
		<section className="w-full bg-[var(--prestige-ivory)] text-[#0E1A24]">
			<div className="mx-auto max-w-[1440px] px-[clamp(20px,6.66vw,96px)] py-[clamp(52px,6.8vw,98px)]">
				<div className="grid min-h-[clamp(520px,48vw,720px)] grid-cols-[1fr_clamp(380px,32vw,600px)] items-center gap-[clamp(40px,7.2vw,104px)] max-lg:min-h-0 max-lg:grid-cols-1 max-lg:gap-[48px]">
					<div className="mx-auto max-w-[clamp(360px,40.3vw,580px)] text-right text-[#0E1A24]">
						<h2
							className="text-[clamp(32px,3.33vw,48px)] leading-[1] tracking-[0]"
							style={{
								fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
								fontWeight: 600,
							}}
						>
							Contact us
						</h2>

						<p
							className="mt-[clamp(8px,0.7vw,10px)] text-[clamp(20px,1.8vw,26px)] leading-[1] tracking-[0]"
							style={{
								fontFamily: "Hubballi, system-ui, sans-serif",
								fontWeight: 400,
							}}
						>
							Experience Italy differently.
						</p>

						<p
							className="mt-[clamp(30px,3.6vw,52px)] text-[clamp(16px,1.48vw,22px)] leading-[1] tracking-[0]"
							style={{
								fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
								fontWeight: 400,
							}}
						>
							Convocamos un aforo limitado, vive la experiencia.
						</p>
					</div>

					<div className="w-full max-w-[clamp(380px,32vw,600px)] justify-self-end max-lg:mx-auto max-lg:justify-self-center max-sm:max-w-full">
						<h3
							className="w-full text-center text-[clamp(22px,2vw,28px)] leading-[1] tracking-[0] italic text-[#0E1A24]"
							style={{
								fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
								fontWeight: 600,
							}}
						>
							Apply for an upcoming experience
						</h3>

						<form
							action={formSubmitAction}
							method="POST"
							className="mt-[clamp(14px,1.4vw,20px)] grid min-h-[clamp(380px,31vw,460px)] grid-cols-2 gap-x-[clamp(10px,0.9vw,13px)] gap-y-[clamp(10px,0.9vw,13px)]"
						>
							<input type="hidden" name="_subject" value="Nueva solicitud desde Pedal Prestige" />
							<input type="hidden" name="_captcha" value="false" />
							<input type="hidden" name="_template" value="table" />
							<input type="hidden" name="_next" value={formSubmitNext} />

							<input
								type="text"
								name="nombre"
								placeholder="NOMBRE COMPLETO"
								className="col-span-2 h-[clamp(42px,3.2vw,48px)] border border-[#7A8085] bg-transparent px-[14px] text-[clamp(13px,1vw,15px)] leading-[1] tracking-[0.03em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
								required
							/>

							<input
								type="email"
								name="email"
								placeholder="EMAIL"
								className="col-span-2 h-[clamp(42px,3.2vw,48px)] border border-[#7A8085] bg-transparent px-[14px] text-[clamp(13px,1vw,15px)] leading-[1] tracking-[0.03em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
								required
							/>

							<input
								type="tel"
								name="telefono"
								placeholder="TELÉFONO"
								className="h-[clamp(42px,3.2vw,48px)] border border-[#7A8085] bg-transparent px-[14px] text-[clamp(13px,1vw,15px)] leading-[1] tracking-[0.03em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
							/>

							<input
								type="text"
								name="ciudad"
								placeholder="CIUDAD"
								className="h-[clamp(42px,3.2vw,48px)] border border-[#7A8085] bg-transparent px-[14px] text-[clamp(13px,1vw,15px)] leading-[1] tracking-[0.03em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
							/>

							<textarea
								name="mensaje"
								placeholder="MENSAJE..."
								rows={4}
								className="col-span-2 h-[clamp(100px,7.5vw,110px)] resize-none border border-[#7A8085] bg-transparent px-[14px] py-[10px] text-[clamp(13px,1vw,15px)] leading-[1.3] tracking-[0.03em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
								required
							/>

							<button
								type="submit"
								className="col-span-2 h-[clamp(42px,3.2vw,48px)] border border-[#7A8085] bg-transparent text-[clamp(13px,1vw,15px)] leading-[1] tracking-[0.06em] text-[#0E1A24]"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
							>
								REQUEST YOUR JOURNEY
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
