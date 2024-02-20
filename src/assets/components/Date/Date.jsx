import Contador from '../Contador/Contador'

import { AddToCalendarButton } from "add-to-calendar-button-react";
import './Date.css'

const Date = () => {
  



  return (
    <div >
      <div id="agenda">
        <div className="text-center pt-5 history__container">
          <img
            className="overtime pt-5"
            src="https://img.icons8.com/plasticine/100/overtime.png"
            alt=""
          />
        </div>
        <h1 className="text-center py-4 color">AGENDA LA FECHA</h1>
        <p className="text-center py-4">Jueves, 28 de Marzo 2024</p>
        <div>
          <Contador />
        </div>

        <div className="text-center py-5">
          <button className="w-52 boton-cal">
            <AddToCalendarButton
              name="Boda Moyetones Ortunio"
              label="Agregar a Calendario"
              styleLight="--btn-background: #e2bf83;; --btn-text: #fff; --btn-border: #fff;"
              styleDark="--btn-background: #000;"
              options={[
                "Apple",
                "Google",
                "iCal",
                "Outlook.com",
                "Microsoft365",
                "MicrosoftTeams",
                "Yahoo",
              ]}
              location="Estragón Restaurant, La Fábrica, Loteo 4, Los Pangues, Puerto Varas, Los Lagos, Chile"
              startDate="2024-03-28"
              endDate="2024-03-28"
              startTime="14:00"
              endTime="18:00"
              timeZone="America/Santiago"
              description="Recepción de bodas de Karina y Manuel"
            ></AddToCalendarButton>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Date
