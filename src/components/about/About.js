import React, { Component } from 'react';
import MyCarousel from '../common/Carousel';

import kick1 from "../../../resources/kick1.jpg";
import kick2 from "../../../resources/kick2.jpg";
import kick3 from "../../../resources/kick3.jpg";

const carouselItems = [
    {
      imgSrc: kick1,
      label: "First slide label",
      caption: "Text här som beskriver slide 1"
    },{
      imgSrc: kick2,
      label: "Second slide label",
      caption: "Text här som beskriver slide 2"
    },{
      imgSrc: kick3,
      label: "Third slide label",
      caption: "Text här som beskriver slide 3"
    }
];

class About extends Component {

  render () {
    return (
      <div>
        <MyCarousel slides={carouselItems} />
        <div className="container-fluid">
          <h3> OM OSS </h3>
          <p> <b>Kalvhagen-Sthlm är ursprungligen en Kickboxningsklubb</b> som startade 2007. Många av våra medlemmar använder Kickboxningen som ett komplement till sin ordinarie träning. Vår metodik är att alla kör med alla oavsett nivå.

          Namnet Kalvhagen är taget från Marcus Johansson´s moderklubb Kalvhagens Box Center i Karlskrona. Kalvhagen i Karlskrona är en av de mest framgånsrika kickboxningsklubbarna i Sverige som Thomas “Totto” Heiderup startade. “Totto” har vunnit det mesta man kan vinna och är en stor förebild för många.
          </p>
          <p> <b> Marcus Johansson</b>, grundare och ägare av KalvhagenSthlm;
          "Träning för mig ska vara individanpassad, utmanande, lärorik och rolig. Jag bli galet motiverad när man lyckas så ett frö hos en klient. Att få ge dem verktyg som gör att de steg för steg, dag för dag når sina mål och sin drömfysik.

          Att kunna se till vad kunden behöver, att använda kunskap och sunt förnuft - och inte vad den senaste trenden i kvällstidningen säger - blir mer och mer viktigt eftersom vi  hela tiden matas med ständigt nya dietmetoder och träningsknep."
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.2626818955748!2d18.056934851925984!3d59.345262881574435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6ea8cc53c7%3A0xb24c9c7b5dea0b3b!2sKalvhagen+Stockholm!5e0!3m2!1sen!2sse!4v1509978355646" width="100%" height="450" frameBorder="0" style={{border:0}}></iframe>
        </div>
      </div>
    );
  }
}

export default About;
