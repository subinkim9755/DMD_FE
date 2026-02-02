import Header from "../components/Header/Header";
import PlayButton from "../components/common/button/PlayButton";
import CircularText from "../components/circularText/CircularText";
export default function LandingPage() {
  return (
    <section className="flex flex-row items-center justify-center w-full h-screen bg-white">

      <div className="flex flex-row items-center justify-center gap-4 w-full h-full md:max-w-[740px] lg:max-w-[1400px]">
        <CircularText text="Calculating damage" onHover="goBonkers" color="#dfdfdf" spinDuration={20}>
          <PlayButton href="/Main" />
        </CircularText>
      </div>
    </section>
  );
}
