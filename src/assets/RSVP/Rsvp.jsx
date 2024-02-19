import { useRef } from "react";
import "./Rsvp.css";
import emailjs from "@emailjs/browser";



const Rsvp = () => {
    const refForm = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = "service_5u9sbr4";
        const templateId = "template_o00avvn";
        const apikey = "x05PjI5B3znhPmtRb";
        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
          .then((result) => {
              alert("Gracias por confirmar su asistencia", result);
              window.location.reload();
          }).catch((error) => {
            alert("Error al confirmar su asistencia", error);
          })

    }
  return (
    <div id="confirmar" className="rsvp__container py-5 text-white container">
      <div className="d-flex justify-content-center">
        <img className="icon__rsvp" src="" alt="" />
      </div>
      <h1 className="py-3 text-center">Confirmación de Asistencia</h1>
      <p className="text-center pb-5">
        Será un placer para nosotros contar con tu presencia
      </p>
      <div className="container bg-white rounded-3 py-5 text-black">
        <form onSubmit={handleSubmit} ref={refForm}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Nombre y Apellido:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Ej. Manuel Ortunio"
              name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="asunto" className="form-label">
              Asunto:
            </label>
            <input
              type="text"
              className="form-control"
              id="asunto"
              placeholder="Confirmación de Asistencia"
              name="subject"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Comentario:
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Escriba su mensaje"
              rows="3"
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn bg-boton">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rsvp;
