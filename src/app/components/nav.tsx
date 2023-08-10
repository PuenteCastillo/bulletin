import Image from "next/image";
import Logo from "../../../images/Logo.png";
import Link from "next/link";
import Search from "../../../images/Search.png";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top ">
        <div className="container">
          {/* <a className="navbar-brand" href="#">
            <Image src={Logo} alt="Logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto  ">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Car
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Personal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  More
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link href="#" className="">
                <Image src={Search} alt="Search" className="search" />
              </Link>
              <Link href="#" className="nav-btn">
                Join
              </Link>
              <Link href="#" className="nav-btn">
                {" "}
                Login
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
