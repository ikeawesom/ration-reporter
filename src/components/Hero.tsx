import FlexContainer from "../utils/FlexContainer";

export default function Hero() {
  return (
    <FlexContainer className="gap-2 px-6 mb-3">
      <h1 className="text-center text-5xl text-slate-800">
        <span className="font-bold text-green-500">Ration</span> Reporter
      </h1>
      <p className="text-gray-400 text-center">
        Craft out your ration reports with ease.
      </p>
    </FlexContainer>
  );
}
