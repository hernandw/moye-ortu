import './Momentos.css'
const fotos = [{
    id: 1,
    src: './public/gallery_1.jpg',
    alt: "Foto 1"
}, {
    id: 2,
    src: './public/gallery_2.jpg',
    alt: "Foto 2"
    },
    {
    id: 3,
    src: './public/gallery_3.jpg',
    alt: "Foto 3"
    },
    {
    id: 4,
    src: './public/gallery_14.jpg',
    alt: "Foto 4"
    },
    {
    id: 5,
    src: './public/gallery_5.jpg',
    alt: "Foto 5"
    },
    {
    id: 6,
    src: './public/gallery_6.jpg',
    alt: "Foto 6"
    }, {
    id: 7,
    src: './public/gallery_7.jpg',
    alt: "Foto 7"
    }, {
    id: 8,
    src: './public/gallery_8.jpg',
    alt: "Foto 8"
    }, {
    id: 9,
    src: './public/gallery_9.jpg',
    alt: "Foto 9"
    }, {
    id: 10,
    src: './public/gallery_10.jpg',
    alt: "Foto 10"
    }, {
    id: 11,
    src: './public/gallery_11.jpg',
    alt: "Foto 11"
    }, {
    id: 12,
    src: './public/gallery_12.jpg',
    alt: "Foto 12"
    }]

const Momentos = () => {
  return (
    <div id="momentos" className='bg-white text-center py-5 container__momentos'>
      <h2>ÁLBUM DE FOTOS</h2>
      <p>Momentos únicos</p>
      <div className="galeria">
        {fotos.map((foto) => (
            <div key={foto.id} className="">
                <img src={foto.src} alt={foto.alt} />
            </div>
        ))}
      </div>
    </div>
  );
}

export default Momentos
