import ShadowBox from "../ShadowBox";
import VerticalDivider from "../VerticalDivider";
import Avatar from "./Avatar";
import Notification from "./Notification";
import SearchBar from "./SearchBar";

export default function DashboardLayout({ children, title }) {
  return (
    <div>
      <ShadowBox>
        <header className="flex items-center">
          <h1 className="text-lg flex-1">{title}</h1>
          <div className="flex gap-4 items-center">
            <SearchBar />
            <div className="flex gap-2 items-center">
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
