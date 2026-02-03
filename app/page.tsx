import Header from "../components/Header/Header";
import PlayButton from "../components/common/button/PlayButton";
import CircularText from "../components/circularText/CircularText"; 
import D_F_Text from "../components/landingPage/D_F_Text";
export default function LandingPage() {
  return (
    <section className="flex flex-row items-center justify-center overflow-visible w-full h-screen bg-white">

      <div className="flex flex-col items-center justify-center gap-4 w-full h-full overflow-visible md:max-w-[740px] lg:max-w-[1400px] gap-10">
        
        <D_F_Text />
        <CircularText text=" Calculating damage" onHover="goBonkers" color="#dfdfdf" spinDuration={20}>
          <PlayButton href="/main" />
        </CircularText>
      </div>
    </section>
  );
}
