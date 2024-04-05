import { WhatsappShareButton } from "react-share";

type ShareType = {
  text: string;
};

const CLASSNAME =
  "flex flex-row items-center justify-between gap-2 px-4 py-2 rounded-md shadow-sm bg-white  duration-200 border-[1px] cursor-pointer hover:brightness-95";
export default function Share({ text }: ShareType) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-slate-800 text-base">
        or share it <span className="text-green-500">straight from here</span>.
      </p>
      <WhatsappShareButton url={text}>
        <span className={CLASSNAME}>
          <img src="whatsapp.svg" alt="" width={30} />
          <p>Share to WhatsApp</p>
        </span>
      </WhatsappShareButton>
    </div>
  );
}
