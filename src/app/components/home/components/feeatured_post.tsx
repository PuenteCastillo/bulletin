import Image from "next/image";

export default function featured_post() {
  return (
    <>
      <div className="bulletin_featured_item">
        <Image
          src="https://picsum.photos/600/650"
          alt="Picture of the author"
          className="bulletin_img"
          width={700}
          height={700}
        />
        <div className="row meta_row">
          <div className="col-6">
            <p className="person">Tio Puente</p>
          </div>
          <div className="col-6">
            <p className="meta"> Landscaping</p>
          </div>
        </div>
        <div className="row content">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>
        </div>
      </div>
    </>
  );
}
