import './Historia.css'
import casamos from '../../icons/iglesia.svg'


const Historia = () => {
  return (
    <div id="casamos" className=" text-center py-5 px-4 ">
      <div className="history__container">
        <img className="icon__iglesia pt-5" src={casamos} alt="" />
        <h2 className="py-3">¡Nos Casamos!</h2>
        <p className="pb-3">
          Sí nos casamos!!! Estamos felices y queremos compartir este hermoso
          momento contigo, ya que nos has acompañado a lo largo de este camino.
        </p>
        <p className="pb-3">
          ¡Mientras llega el gran día hemos creado esta web con un montón de
          secciones para que estés al día de todo y para compartir nuestra
          historia de amor.
        </p>
        <p>
          Una cosa importante, en la sección asistencia puedes confirmar si vas
          al matrimonio o no. Confírmanos lo antes posible por favor, porque así
          nos será mucho más fácil organizarlo todo.
        </p>
      </div>
    </div>
  );
}

export default Historia
