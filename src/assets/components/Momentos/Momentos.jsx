import './Momentos.css'


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

  const handleModal = () => {
    document.addEventListener("click", (e) => {
      console.log(e.target.getAttribute("src"))
      console.log(e.target.classList.contains("modal-img"))
      if(e.target.getAttribute("src")){
        const src = e.target.getAttribute("src");
        
        document.querySelector(".modal-bod").src = src
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show()
      }
    })
  }
  return (
    <div
      id="momentos"
      className="bg-white text-center py-3 container__momentos"
    >
      <div className="text-center">
        <img
          src="https://img.icons8.com/plasticine/100/apple-photos.png"
          alt=""
        />
      </div>
      <h2>ÁLBUM DE FOTOS</h2>
      <p>Momentos únicos</p>
      <div className="galeria">
        <div className="gallery-item">
          <img className="modal-img" onClick={handleModal} src={foto1} alt="" />
        </div>
        <div className="gallery-item">
          <img className="modal-img" onClick={handleModal} src={foto2} alt="" />
        </div>
        <div className="">
          <img className="modal-img" onClick={handleModal} src={foto3} alt="" />
        </div>
        <div className="">
          <img className="modal-img" onClick={handleModal} src={foto4} alt="" />
        </div>
        <div className="">
          <img className="modal-img" onClick={handleModal} src={foto5} alt="" />
        </div>
        <div className="">
          <img className="modal-img" onClick={handleModal} src={foto6} alt="" />
        </div>
        <div className="">
          <img className="modal-img" onClick={handleModal} src={foto7} alt="" />
        </div>
        <div className="">
          <img className="modal-img" onClick={handleModal} src={foto8} alt="" />
        </div>
        <div className="">
          <img src={foto9} alt="" />
        </div>
        <div className="">
          <img
            className="modal-img"
            onClick={handleModal}
            src={foto10}
            alt=""
          />
        </div>
        <div className="">
          <img
            className="modal-img"
            onClick={handleModal}
            src={foto11}
            alt=""
          />
        </div>
        <div className="">
          <img
            className="modal-img"
            onClick={handleModal}
            src={foto12}
            alt=""
          />
        </div>
      </div>
      <hr className="mt-5 border-2" />

      <div>
        <div
          className="modal fade"
          id="gallery-modal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="true"
                ></button>
              </div>
              {/* <div className="modal-body">...</div> */}
              <div className="modal-body">
                <img
                  src="https://placedog.net/640/640"
                  className="modal-bod w-100"
                  alt="modal img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Momentos
