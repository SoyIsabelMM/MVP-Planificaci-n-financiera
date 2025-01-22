import ShadowBox from "../ShadowBox";
import VerticalDivider from "../VerticalDivider";
import Avatar from "./Avatar";
import Notification from "./Notification";
import SearchBar from "./SearchBar";

export default function DashboardLayout({ children, title }) {
  return (
    <div>
      <ShadowBox>
        <header className="flex ">
          <h1 className="text-lg flex-1">{title}</h1>
          <div className="flex gap-4">
            <SearchBar />
            <div className="flex gap-2">
              <Notification />
              <VerticalDivider />
              <Avatar />
            </div>
          </div>
        </header>
      </ShadowBox>
      <div>
        <nav>Navbar</nav>
      </div>
      <main>{children}</main>
    </div>
  );
}
