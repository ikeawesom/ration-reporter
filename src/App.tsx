import Hero from "./components/Hero";
import PrimaryButton from "./components/utils/PrimaryButton";
import Spinner from "./components/utils/Spinner";
import useGenerate from "./hooks/useGenerate";
import DailyRation from "./components/DailyRation";
import DailyDates from "./components/DailyDates";
import FlexContainer from "./utils/FlexContainer";
import { Toaster, toast } from "sonner";
import ReportText from "./components/ReportText";
import { useState } from "react";

export default function App() {
  const {
    generateReport,
    reportText,
    loading,
    handleMonday,
    monday,
    setLoading,
  } = useGenerate();
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    const res = generateReport();
    if (res === "") toast.error("Empty report! Please input some data.");
    else {
      setLoading(true);
      const timing = Math.floor(Math.random() * 2500);
      setTimeout(() => {
        generateReport();
        setLoading(false);
        setLoaded(true);
      }, timing);
    }
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <FlexContainer className="min-h-screen sm:px-6 px-4 py-10 gap-4 w-full bg-gradient-to-b from-green-50">
        <Hero />
        <DailyDates
          date={monday}
          change={handleMonday}
          className="w-full max-w-[800px] "
        />
        <DailyRation monday={monday} className="w-full max-w-[800px] " />
        <PrimaryButton
          disabled={loading}
          className="mt-2 flex items-center justify-center gap-2 w-full max-w-[800px] "
          onClick={handleLoad}
        >
          {loading ? (
            <>
              Loading <Spinner />
            </>
          ) : (
            "Generate Report"
          )}
        </PrimaryButton>
        {loaded && <ReportText reportText={reportText} />}
      </FlexContainer>
    </>
  );
}
