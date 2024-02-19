import './App.css'
import Rsvp from './assets/RSVP/Rsvp';
import Date from './assets/components/Date/Date';
import Faqs from './assets/components/Faqs/Faqs';
import Festejo from './assets/components/Festejo/Festejo';
import Header from './assets/components/Header/Header';
import Historia from './assets/components/Historia/Historia';
import Momentos from './assets/components/Momentos/Momentos';
import Padrinos from './assets/components/Padrinos/Padrinos';



/* import foto1 from "./public/foto_1.jpg"; */

const App = () => {
  return (
    <>
      <Header />
      <Date />
      <Festejo />
      <Historia />
      <Momentos />
      <Padrinos />
      <Faqs />
      <Rsvp />
      
      
    </>
  );
}

export default App
