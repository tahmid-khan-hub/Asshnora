import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Privacy from "./Privacy/Privacy";

export default function Home() {
  return (
    <div className="text-black max-w-[1350px] mx-auto px-4 md:px-3">
      <Banner></Banner>
      <Features></Features>
      <Privacy></Privacy>
    </div>
  );
}
