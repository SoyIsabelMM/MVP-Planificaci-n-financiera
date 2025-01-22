import { AlarmBell } from "../../../public/icons/Bell";

export default function Notification() {
  return (
    <div className="bg-black size-8 rounded-full flex items-center justify-center cursor-pointer">
      <AlarmBell className="fill-white size-6" />
    </div>
  );
}
