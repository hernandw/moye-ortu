// Importar React y moment.js
import  { useState, useEffect, useRef } from "react";
import moment from "moment";
import './Contador.css'

// Crear el componente funcional Countdown
function Countdown() {
  // Crear el estado para el tiempo restante
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

 

  // Crear la referencia para el intervalo
  const intervalRef = useRef();

  // Crear la función para actualizar el tiempo restante
  const updateTimer = () => {
    // Obtener la fecha actual y la fecha límite (28 de marzo de 2024 a las 23:59:59)
    const now = moment();
    const deadline = moment("2024-03-28T23:59:59");

    // Calcular la diferencia entre ambas fechas en días, horas, minutos y segundos
    const diff = deadline.diff(now);
    const days = deadline.diff(now, "days");
    const hours = deadline.subtract(days, "days").diff(now, "hours");
    const minutes = deadline.subtract(hours, "hours").diff(now, "minutes");
    const seconds = deadline.subtract(minutes, "minutes").diff(now, "seconds");

    // Actualizar el estado con el tiempo restante
    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });

    // Si la diferencia es menor o igual a cero, detener el intervalo y mostrar un mensaje
    if (diff <= 0) {
      clearInterval(intervalRef.current);
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      alert("¡Se acabó el tiempo!");
    }
  };

  // Usar el hook useEffect para iniciar el intervalo y limpiarlo al desmontar el componente
  useEffect(() => {
    // Iniciar el intervalo que llama a la función updateTimer cada segundo
    intervalRef.current = setInterval(updateTimer, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalRef.current);
  }, []);

  // Retornar el JSX que muestra el tiempo restante en diferentes divs
  return (
    <div className="countdown">
      <div className="d-flex regresivo justify-content-around ">
        <div className="text-center">
          <p className="color">{timeLeft.days}</p>
          <p>DÍAS</p>
        </div>
        <div className="text-center">
          <p className="color">{timeLeft.hours}</p>
          <p>HRS</p>
        </div>
        <div className="text-center">
          <p className="color">{timeLeft.minutes}</p>
          <p>MIN</p>
        </div>
        <div className="text-center">
          <p className="color">{timeLeft.seconds}</p>
          <p>SEG</p>
        </div>
      </div>
    </div>
  );
}

// Exportar el componente
export default Countdown;
