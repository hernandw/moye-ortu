import './Header.css'

const Header = () => {
  return (
    <div>
      <nav
        
        className="navbar navbar-expand-lg menu navbar-dark fixed-top"
      >
        <div className="container">
          <a className="menu__title navbar-brand" href="#">
            Karina y Manuel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#agenda">
                  Agenda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#recepcion">
                  Recepción
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#casamos">
                  Historia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#momentos">
                  Álbum
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#preguntas">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#confirmar">
                  Confirmación
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

      <header id="inicio" className="header__container bg-white py-5">
        <div className="banner">
          <div className="capa"></div>
          <div className="info">
            <h2>¡Nos Casamos!</h2>
            <p>Y queremos compartirlo contigo</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header
