import "./Rsvp.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

<img width="100" height="100" src="" alt="today" />;

const Rsvp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const serviceId = "service_5u9sbr4";
    const templateId = "template_o00avvn";
    const apikey = "x05PjI5B3znhPmtRb";

    emailjs
      .send(serviceId, templateId, data, apikey)
      .then((result) => {
        alert("Gracias por confirmar su asistencia", result);
        window.location.reload();
      })
      .catch((error) => {
        alert("Error al confirmar su asistencia", error);
      });
  };
  return (
    <div
      id="confirmar"
      className="rsvp__container py-5 px-4 text-white container-fluid"
    >
      <div className="d-flex justify-content-center pt-5">
        <div className="text-center">
          <img
            src="https://img.icons8.com/stickers/100/today.png"
            alt="calendar-28"
          />
        </div>
      </div>
      <h1 className="py-3 text-center">Confirmación de Asistencia</h1>
      <p className="text-center pb-5">
        Será un placer para nosotros contar con tu presencia
      </p>
      <div className="container bg-white rounded-3 py-5 text-black px-4 formulario">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("username", {
                required: true,
                pattern: /^[A-Za-z\s]+$/,
              })}
            />
            {errors.username?.type === "required" && (
              <p className="text-danger fw-bold">El campo es requerido</p>
            )}
            {errors.username?.type === "pattern" && (
              <p className="text-danger fw-bold">El campo solo acepta letras</p>
            )}
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
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="text-danger fw-bold">El campo es requerido</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-danger fw-bold">El formato es incorrecto</p>
            )}
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
              {...register("subject", {
                required: true,
                pattern: /^[A-Za-z\s]+$/,
              })}
            />
            {errors.subject?.type === "required" && (
              <p className="text-danger fw-bold">El campo es requerido</p>
            )}
            {errors.subject?.type === "pattern" && (
              <p className="text-danger fw-bold">El campo solo acepta letras</p>
            )}
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
              {...register("message")}
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
