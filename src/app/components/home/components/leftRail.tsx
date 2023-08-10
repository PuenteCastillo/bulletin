import Image from "next/image";
export default function LeftRail() {
  return (
    <>
      <div className="bulletin_item">
        <h3>Lorem ipsum dolor sit amet consectetur elit. Maxime mollitia.</h3>
        <div className="row">
          <div className="col-5">
            <p className="person">Admin</p>
          </div>
          <div className="line col-7">
            <p className="meta">2021-09-09</p>
          </div>
        </div>
      </div>

      <div className="bulletin_item">
        <h3>
          Lorem ipsum dolor sit amet consectetur elit. Maxime mollitia. Lorem
          ipsum dolor sit amet consectetur elit.
        </h3>
        <div className="row">
          <div className="col-5">
            <p className="person">Admin</p>
          </div>
          <div className="line col-7">
            <p className="meta">2021-09-09</p>
          </div>
        </div>
      </div>

      <div className="bulletin_item">
        <h3>
          Lorem ipsum dolor sit amet consectetur elit. Maxime mollitia. Lorem
          ipsum dolor sit amet consectetur elit.
        </h3>

        <Image
          src="https://picsum.photos/450/450"
          alt="Picture of the author"
          className="bulletin_img"
          width={500}
          height={500}
        />
        <div className="row">
          <div className="col-5">
            <p className="person">Admin</p>
          </div>
          <div className="line col-7">
            <p className="meta">2021-09-09</p>
          </div>
        </div>
      </div>
    </>
  );
}
