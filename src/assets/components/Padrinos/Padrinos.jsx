import './Padrinos.css'
import padrinos from '../../icons/padrinos.svg'

const Padrinos = () => {
  return (
    <div id="padrinos" className="padrinos__container text-center py-4 px-4">
      <img
        className="icon__padrinos py-3"
        src={padrinos}
        alt="Padrinos"
      />
      <h2 className="py-3 text-center">Padrinos/Testigos</h2>
      <div className="padrinos__names">
        <p>Desire Gómez</p>
        <p>Ivan Delgado</p>
      </div>
    </div>
  );
}

export default Padrinos
