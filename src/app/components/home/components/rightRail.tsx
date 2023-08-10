import Image from "next/image";

export default function RightRail() {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-6 col-xl-12 ">
        <div className="bulletin__minor_item">
          <div className="row ">
            <div className="col-4">
              <Image
                src="https://picsum.photos/200/300"
                alt="Picture of the author"
                className="bulletin_img"
                width={500}
                height={500}
              />
            </div>
            <div className="col-8 ">
              <h4> Landscaping </h4>
              <h3>Lorem ipsum dolor sit amet consectetur elit.</h3>
            </div>
          </div>
        </div>

        <div className="bulletin__minor_item">
          <div className="row ">
            <div className="col-4">
              <Image
                src="https://picsum.photos/200/350"
                alt="Picture of the author"
                className="bulletin_img"
                width={500}
                height={500}
              />
            </div>
            <div className="col-8 ">
              <h4> Barber </h4>
              <h3>Lorem ipsum dolor sit amet consectetur elit.</h3>
            </div>
          </div>
        </div>

        <div className="bulletin__minor_item">
          <div className="row ">
            <div className="col-4">
              <Image
                src="https://picsum.photos/200/350"
                alt="Picture of the author"
                className="bulletin_img"
                width={500}
                height={500}
              />
            </div>
            <div className="col-8 ">
              <h4> Mechanic </h4>
              <h3>Lorem ipsum dolor sit amet consectetur elit.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-12  ">
        <div className="section_image">
          <Image
            src="https://picsum.photos/400/400"
            alt="Picture of the author"
            className="section_img"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
