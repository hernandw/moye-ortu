import './App.css'
import Rsvp from './assets/RSVP/Rsvp';
import Date from './assets/components/Date/Date';
import Faqs from './assets/components/Faqs/Faqs';
import Festejo from './assets/components/Festejo/Festejo';
import Footer from './assets/components/Footer/Footer';
import Header from './assets/components/Header/Header';
import Historia from './assets/components/Historia/Historia';
import Momentos from './assets/components/Momentos/Momentos';




/* import foto1 from "./public/foto_1.jpg"; */

const App = () => {
  return (
    <>
      <Header />
      <Date />
      <Festejo />
      <Historia />
      <Momentos />
      
      <Faqs />
      <Rsvp />
      <Footer />
      
      
    </>
  );
}

export default App
