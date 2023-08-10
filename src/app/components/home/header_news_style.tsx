import Image from "next/image";
import LeftRail from "./components/leftRail";
import Featured_post from "./components/feeatured_post";
import RightRail from "./components/rightRail";
export default function Header_news_style() {
  return (
    <section id="header_bulletin">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 col-lg-6 col-xl-3 p-3">
            <LeftRail />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-3">
            <Featured_post />
          </div>
          <div className=" col-md-12 col-lg-12 col-xl-3 p-3 ">
            <RightRail />
          </div>
        </div>
      </div>
    </section>
  );
}
