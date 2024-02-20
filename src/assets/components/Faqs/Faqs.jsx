import "./faqs.css";
import faqsIcon from "../../icons/faqs.svg";
const faqs = [
  {
    id: 1,
    question: "¿Cómo puedo confirmar mi asistencia?",
    answer:
      "Mediante el uso del sitio web. En la pestaña Confirmación. Coloque su nombre y apellido luego sobre el boton continuar y complete el formulario",
  },
  {
    id: 2,
    question: "¿Cuál es la fecha de la Ceremonia?",
    answer: "La fecha de la ceremonia es el 28 de marzo de 2024.",
  },
  {
    id: 3,
    question: "¿Cuál es la hora de la Recepción?",
    answer: "La hora de la recepción será de 14 a 18 hrs.",
  },
  {
    id: 4,
    question: "¿Cuál es el lugar de la Recepción?",
    answer:
      "El lugar de la recepción es el Restaurante Estragón. camino Ensenada KM 6.9 Puerto Varas.",
  },
  {
    id: 5,
    question: "¿Están invitados los niños?",
    answer:
      "Le pedimos cortesmente que solo invite niños si se mencionan en su confirmación",
  },
  {
    id: 6,
    question: "¿Cuál es la fecha límite para confirmar mi asistencia?",
    answer: "Hasta el 15 de marzo de 2024",
  },
  {
    id: 7,
    question: "¿Cuál es el lugar de la Ceremonia?",
    answer:
      "La ceremonia será en el Registro Civil, pero por razones de espacio solo pueden asistir los padres/madres de los contrayentes y los testigos/padrinos",
  },
  {
    id: 8,
    question: "¿Cuál es el código de vestimenta?",
    answer:
      "Lo más importante es que estés cómodo y recuerdes que es una reunión semiformal de día.",
  },
  {
    id: 9,
    question: "¿Puedo tomar fotografias durante la recepción?",
    answer:
      "Eres más que bienvenido a tomar fotografias, pero te pedimos que mantengas al mínimo y tengas en cuenta al fotógrafo/videografo que hemos contratado para capturar momentos",
  },
  {
    id: 10,
    question: "¿A qué hora debo llegar a la recepción?",
    answer: "Recomendamos llegar al menos 15 minutos antes (1:45 pm)",
  },
  {
    id: 11,
    question: "¿A qué hora termina la recepción?",
    answer: "La recepción en el Restaurant Estragon termina a las 18 hrs.",
  },

  {
    id: 13,
    question: "¿Habrá menú Vegetariano/Gluten Free?",
    answer:
      "Te pedimos al momento de confirmar tu asistencia a la recepción indiques por la página web si eres vegetariano o intolerante al gluten.",
  },

  {
    id: 15,
    question: "¿Puedo llevar a alguien más si no está en la invitación?",
    answer:
      " No. El almuerzo esta planificado para un número específico de personas",
  },
  {
    id: 16,
    question: "Debo llevar regalo de Bodas",
    answer:
      "No es necesario, tu presencia es lo más importante y valioso para nosotros",
  },
  {
    id: 17,
    question: "¿El lugar de recepción es cerrado o abierto'",
    answer:
      "El almuerzo está planificado en un lugar cerrado con estacionamiento, aunque tiene el disfrutes de áreas verde si el clima lo permite.",
  },
];

 const Faqs = () => {
  return (
    <div id="preguntas" className="text-center py-5 bg-white faqs__container">
      <img className="icon__faqs pt-5" src={faqsIcon} alt="" />
      <h2 className="py-5">Preguntas Frencuentes</h2>
      <div className="container">
        <div className="accordion" id="accordionExample">
                  {
            faqs.map((faq) => {
              return (
                <div className="accordion-item" key={faq.id}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${faq.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${faq.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                          <div className="accordion-body">{faq.answer}</div>
                      </div>
                    </div>
                  )
            })
          }
          
        </div>
      </div>
    </div>
  );
}

export default Faqs
