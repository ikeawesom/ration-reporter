import { toast } from "sonner";
import FlexContainer from "../utils/FlexContainer";
import Clipboard from "./utils/Clipboard";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Share from "./utils/Share";

export default function ReportText({ reportText }: { reportText: string }) {
  return (
    <FlexContainer className="mt-2 gap-4 w-full max-w-[800px] ">
      <h4 className="text-slate-800 text-center">
        Your <span className="text-green-500 font-medium">ration report</span>{" "}
        has been generated. Simply share from here or copy and paste the message
        below.
      </h4>

      <div className="relative w-full">
        <textarea
          className="bg-white rounded-lg shadow-md resize-none w-full md:p-6 p-4 min-h-[40vh] details-area"
          defaultValue={reportText}
          readOnly
        />
        <CopyToClipboard
          text={reportText}
          onCopy={() => toast.success("Copied to clipboard")}
        >
          <div className="absolute bottom-5 right-5 shadow-md rounded-full bg-green-500 p-4 cursor-pointer hover:opacity-80 duration-150">
            <Clipboard />
          </div>
        </CopyToClipboard>
      </div>

      <Share text={reportText} />
    </FlexContainer>
  );
}
