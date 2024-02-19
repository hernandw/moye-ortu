import './Festejo.css'
import festejo from '../../icons/rings.svg'



const Festejo = () => {
   
  return (
    <div id="recepcion" className="text-center bg-white py-5">
      <img className="rings" src={festejo} alt="" />
      <h1 className="text-center title">Recepción</h1>
      <div>
        <p className="text-2xl text-center text-event">14:00 - 18:00</p>
        <p className="text-2xl text-center text-event">Restaurant Estragon</p>
        <p className="text-2xl text-center text-event">
          La fábrica, loteo 4, Los pangues, Puerto Varas, Los Lagos.
        </p>
        <div>
          <button className="button">
            <a
              href="https://www.google.com/maps/place/Estrag%C3%B3n+Restaurant/@-41.3147499,-72.8917226,17z/data=!3m1!4b1!4m6!3m5!1s0x961827dbae4c55c3:0x69952add48ef1841!8m2!3d-41.3147499!4d-72.8917226!16s%2Fg%2F11pdxzn930?hl=es-CL&entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              Mapa
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Festejo
