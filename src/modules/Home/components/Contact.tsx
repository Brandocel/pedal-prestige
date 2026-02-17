export default function Contact() {
	const formSubmitEmail = "tu-correo@dominio.com";
	const formSubmitAction = `https://formsubmit.co/${formSubmitEmail}`;
	const formSubmitNext =
		typeof window !== "undefined"
			? `${window.location.origin}/#contact-success`
			: "/#contact-success";

	return (
		<section className="w-full bg-[var(--prestige-ivory)] text-[#0E1A24]">
			<div className="mx-auto max-w-[1440px] px-[clamp(20px,6.66vw,96px)] py-[clamp(52px,6.8vw,98px)]">
				<div className="grid min-h-[clamp(460px,43vw,620px)] grid-cols-[1fr_clamp(330px,28.47vw,520px)] items-center gap-[clamp(36px,6.66vw,96px)] max-lg:min-h-0 max-lg:grid-cols-1 max-lg:gap-[40px]">
					<div className="mx-auto max-w-[clamp(360px,40.3vw,580px)] text-center text-[#0E1A24]">
						<h2
							className="text-[clamp(28px,2.7778vw,40px)] leading-[1] tracking-[0]"
							style={{
								fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
								fontWeight: 600,
							}}
						>
							Contact us
						</h2>

						<p
							className="mt-[clamp(6px,0.55vw,8px)] text-[clamp(18px,1.6667vw,24px)] leading-[1] tracking-[0]"
							style={{
								fontFamily: "Hubballi, system-ui, sans-serif",
								fontWeight: 400,
							}}
						>
							Experience Italy differently.
						</p>

						<p
							className="mt-[clamp(26px,3.2vw,46px)] text-[clamp(15px,1.3889vw,20px)] leading-[1] tracking-[0]"
							style={{
								fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
								fontWeight: 400,
							}}
						>
							Convocamos un aforo limitado, vive la experiencia.
						</p>
					</div>

					<div className="w-full max-w-[clamp(330px,28.47vw,520px)] justify-self-end max-lg:mx-auto max-lg:justify-self-center max-sm:max-w-full">
						<h3
							className="w-full text-center text-[clamp(20px,1.8056vw,26px)] leading-[1] tracking-[0] italic text-[#0E1A24]"
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
							className="mt-[clamp(10px,1.1vw,16px)] grid min-h-[clamp(320px,27.36vw,394px)] grid-cols-2 gap-x-[clamp(8px,0.7vw,10px)] gap-y-[clamp(7px,0.63vw,9px)]"
						>
							<input type="hidden" name="_subject" value="Nueva solicitud desde Pedal Prestige" />
							<input type="hidden" name="_captcha" value="false" />
							<input type="hidden" name="_template" value="table" />
							<input type="hidden" name="_next" value={formSubmitNext} />

							<input
								type="text"
								name="nombre"
								placeholder="NOMBRE COMPLETO"
								className="col-span-2 h-[clamp(34px,2.78vw,40px)] border border-[#7A8085] bg-transparent px-[12px] text-[clamp(10px,0.76vw,11px)] leading-[1] tracking-[0.03em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
								required
							/>

							<input
								type="email"
								name="email"
								placeholder="EMAIL"
								className="col-span-2 h-[clamp(34px,2.78vw,40px)] border border-[#7A8085] bg-transparent px-[12px] text-[clamp(10px,0.76vw,11px)] leading-[1] tracking-[0.03em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
								required
							/>

							<input
								type="tel"
								name="telefono"
								placeholder="TELÉFONO"
								className="h-[clamp(34px,2.78vw,40px)] border border-[#7A8085] bg-transparent px-[12px] text-[clamp(10px,0.76vw,11px)] leading-[1] tracking-[0.03em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
							/>

							<input
								type="text"
								name="ciudad"
								placeholder="CIUDAD"
								className="h-[clamp(34px,2.78vw,40px)] border border-[#7A8085] bg-transparent px-[12px] text-[clamp(10px,0.76vw,11px)] leading-[1] tracking-[0.03em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
							/>

							<textarea
								name="mensaje"
								placeholder="MENSAJE..."
								rows={4}
								className="col-span-2 h-[clamp(82px,6.66vw,96px)] resize-none border border-[#7A8085] bg-transparent px-[12px] py-[8px] text-[clamp(10px,0.76vw,11px)] leading-[1] tracking-[0.03em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
								style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
								required
							/>

							<button
								type="submit"
								className="col-span-2 h-[clamp(34px,2.78vw,40px)] border border-[#7A8085] bg-transparent text-[clamp(10px,0.76vw,11px)] leading-[1] tracking-[0.06em] text-[#0E1A24]"
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
