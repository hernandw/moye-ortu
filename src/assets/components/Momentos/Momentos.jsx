import './Momentos.css'
/* const fotos = [
  {
    id: 1,
    src: "../../images/gallery_1.jpg",
    alt: "Foto 1",
  },
  {
    id: 2,
    src: "../../images/gallery_2.jpg",
    alt: "Foto 2",
  },
  {
    id: 3,
    src: "../../images/gallery_3.jpg",
    alt: "Foto 3",
  },
  {
    id: 4,
    src: "../../images/gallery_14.jpg",
    alt: "Foto 4",
  },
  {
    id: 5,
    src: "../../images/gallery_5.jpg",
    alt: "Foto 5",
  },
  {
    id: 6,
    src: "../../images/gallery_6.jpg",
    alt: "Foto 6",
  },
  {
    id: 7,
    src: "../../images/gallery_7.jpg",
    alt: "Foto 7",
  },
  {
    id: 8,
    src: "../../images/gallery_8.jpg",
    alt: "Foto 8",
  },
  {
    id: 9,
    src: "../../images/gallery_9.jpg",
    alt: "Foto 9",
  },
  {
    id: 10,
    src: "../../images/gallery_10.jpg",
    alt: "Foto 10",
  },
  {
    id: 11,
    src: "../../images/gallery_11.jpg",
    alt: "Foto 11",
  },
  {
    id: 12,
    src: "../../images/gallery_12.jpg",
    alt: "Foto 12",
  },
]; */

import foto1 from "../../images/gallery_1.jpg";
import foto2 from "../../images/gallery_2.jpg";
import foto3 from "../../images/gallery_3.jpg";
import foto4 from "../../images/gallery_4.jpg";
import foto5 from "../../images/gallery_5.jpg";
import foto6 from "../../images/gallery_6.jpg";
import foto7 from "../../images/gallery_7.jpg";
import foto8 from "../../images/gallery_8.jpg";
import foto9 from "../../images/gallery_9.jpg";
import foto10 from "../../images/gallery_10.jpg";
import foto11 from "../../images/gallery_11.jpg";
import foto12 from "../../images/gallery_12.jpg";


const Momentos = () => {
  return (
    <div
      id="momentos"
      className="bg-white text-center py-5 container__momentos"
    >
      <h2>ÁLBUM DE FOTOS</h2>
      <p>Momentos únicos</p>
      <div className="galeria">
        {/*  {fotos.map((foto) => (
            <div key={foto.id} className="">
                <img src={foto.src} alt={foto.alt} />
            </div>
        ))} */}
        <div className="">
          <img src={foto1} alt="" />
        </div>
        <div className="">
          <img src={foto2} alt="" />
        </div>
        <div className="">
          <img src={foto3} alt="" />
        </div>
        <div className="">
          <img src={foto4} alt="" />
        </div>
        <div className="">
          <img src={foto5} alt="" />
        </div>
        <div className="">
          <img src={foto6} alt="" />
        </div>
        <div className="">
          <img src={foto7} alt="" />
        </div>
        <div className="">
          <img src={foto8} alt="" />
        </div>
        <div className="">
          <img src={foto9} alt="" />
        </div>
        <div className="">
          <img src={foto10} alt="" />
        </div>
        <div className="">
          <img src={foto11} alt="" />
        </div>
        <div className="">
          <img src={foto12} alt="" />
        </div>

      </div>
    </div>
  );
}

export default Momentos
