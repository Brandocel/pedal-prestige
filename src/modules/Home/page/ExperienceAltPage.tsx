import NavbarAlt from "../components/NavbarAlt";
import Footer from "../components/Footer";
import wheel from "../assets/experiense/rueda.png";
import chain from "../assets/experiense/cadena.svg";
import bannerImage from "../assets/experiense/photo (1).jpg";

const FEATURES = [
  {
    title: "Arrival & Welcome",
    text: "The journey begins with a warm welcome at the estancia, balances and support, followed by their accommodation and introduction to the experience in a relaxed environment designed for ease and rhythm.",
  },
  {
    title: "Preparation & First Rides",
    text: "Bicycles are assembled and carefully reviewed, allowing travelers to settle in before the first rides begin. The initial routes are designed to connect riders with the landscape and surrounding towns.",
  },
  {
    title: "Iconic Landscapes",
    text: "Each day unfolds across curated cycling routes that balance challenge and enjoyment. From scenic countryside roads to iconic destinations, every ride is designed to connect with the essence of the region.",
  },
  {
    title: "Culture & Gastronomy",
    text: "Beyond cycling, the journey is enriched with local encounters, selected dining experiences and cultural moments that reflect the character of each destination.",
  },
  {
    title: "Moments to Share",
    text: "Throughout the journey, professional photo and video coverage captures the experience, allowing travelers to relive and share meaningful moments long after the trip ends.",
  },
  {
    title: "A Seamless Experience",
    text: "Logistics, transfers, accommodation and daily planning are handled with care, allowing travelers to focus entirely on the experience itself.",
  },
];

export default function ExperienceAltPage() {
  return (
    <main className="w-full bg-[var(--prestige-ivory)]" id="experience-page">
      <NavbarAlt />

      <section className="w-full min-h-[clamp(1080px,100vh,1480px)] bg-[var(--prestige-ivory)]">
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,4.16vw,60px)] py-[clamp(72px,8vh,116px)]">
          <div className="mx-auto w-full max-w-[1240px] text-center text-[#0E1A24]">
            <h1
              className="text-[clamp(32px,2.7vw,39px)] leading-[1]"
              style={{
                fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                fontWeight: 600,
              }}
            >
              The Pedal Prestige Experience
            </h1>

            <p
              className="mx-auto mt-[10px] max-w-[760px] text-[clamp(15px,1.25vw,18px)] leading-[1.3] text-[#2F3A45]"
              style={{ fontFamily: "Hubballi, system-ui, sans-serif", fontWeight: 400 }}
            >
              A curated cycling journey designed around comfort, culture and connection.
            </p>

            <div className="mx-auto mt-[clamp(36px,3.9vw,56px)] flex items-center justify-center">
              <img
                src={chain}
                alt=""
                aria-hidden="true"
                className="h-[clamp(12px,1.25vw,18px)] w-[clamp(112px,10.9vw,157px)]"
              />
            </div>

            <div className="mx-auto mt-[clamp(36px,3.9vw,56px)] w-full max-w-[822px] space-y-[14px] text-[clamp(14px,1.11vw,16px)] leading-[1.26] text-[#1F2A35]">
              <p style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}>
                Each Pedal Prestige journey is thoughtfully designed to go beyond the ride.
              </p>
              <p style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}>
                Over the course of several days, travelers move through iconic landscapes, local culture and carefully selected experiences — all at a rhythm that allows for enjoyment, discovery and comfort.
              </p>
              <p style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}>
                From the first welcome to the final ride, every moment is curated to create a seamless and memorable experience.
              </p>
            </div>

            <div className="mx-auto mt-[clamp(36px,3.9vw,56px)] overflow-hidden">
              <img
                src={bannerImage}
                alt="Pedal Prestige riders"
                className="mx-auto h-[clamp(190px,25.28vw,364px)] w-[min(100%,1280px)] object-cover"
                draggable={false}
              />
            </div>

            <div className="mx-auto mt-[clamp(36px,3.9vw,56px)] grid w-full max-w-[1281px] grid-cols-3 gap-x-[clamp(16px,3.33vw,48px)] gap-y-[clamp(36px,3.9vw,56px)] max-lg:grid-cols-2 max-sm:grid-cols-1">
              {FEATURES.map((item) => (
                <article key={item.title} className="mx-auto w-full max-w-[395px] min-h-[154px]">
                  <img
                    src={wheel}
                    alt=""
                    aria-hidden="true"
                    className="mb-[12px] ml-auto mr-auto h-[clamp(16px,1.32vw,19px)] w-auto"
                  />

                  <h2
                    className="text-center text-[clamp(22px,1.8056vw,26px)] leading-[1]"
                    style={{
                      fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                      fontWeight: 600,
                      fontStyle: "italic",
                    }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="mt-[8px] text-justify text-[clamp(14px,1.111vw,16px)] leading-[1.2] text-[#2D3742]"
                    style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
                  >
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <a
              href="/experience/choose"
              className="mt-[clamp(42px,4.4vw,64px)] h-[clamp(40px,3.47vw,50px)] w-[min(100%,410px)] border border-[#7A8085] px-[20px] text-[clamp(10px,0.76vw,11px)] leading-[1] tracking-[0.06em] text-[#0E1A24]"
              style={{
                fontFamily: "Hubballi, system-ui, sans-serif",
                fontWeight: 400,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              CHOOSE YOUR EXPERIENCE
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
