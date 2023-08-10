import Link from "next/link";
import Image from "next/image";
import Background from "../../../../images/Background.png";

export default function Header() {
  return (
    <>
      <div id="home_hero" className="container">
        <div className="row ">
          <div className="col-md-5">
            <div className="parent">
              <div className="child">
                <div className="title">
                  <h1>
                    Support your <span>Community</span>
                  </h1>
                </div>
                <div className="subtitle">
                  <p>Find local professionals and businesses in your area. </p>
                </div>
                <Link href="#" className="theme-btn">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <Image src={Background} alt="Background" className="background" />
          </div>
        </div>
      </div>
    </>
  );
}
