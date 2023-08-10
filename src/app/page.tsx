import Image from "next/image";
import Nav from "./components/nav";
import Header from "./components/home/header";
import Header_news_style from "./components/home/header_news_style";
import Logo from "../../images/Logo.png";

export default function Home() {
  return (
    <>
      <div id="search_header" className=" sticky-top">
        <div className="row ">
          <Image src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="search">
          <input type="text" />
          <button type="submit">Search</button>
        </div>
      </div>
      <Nav />
      {/* <Header /> */}
      <Header_news_style />
    </>
  );
}
