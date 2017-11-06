import React, { Component } from 'react';
import MyCarousel from './Carousel';


class About extends Component {

  render () {
    return (
      <div>
        <MyCarousel />
        <div className="container-fluid">
          <h3> OM OSS </h3>
          <p> <b>Kalvhagen-Sthlm är ursprungligen en Kickboxningsklubb</b> som startade 2007. Många av våra medlemmar använder Kickboxningen som ett komplement till sin ordinarie träning. Vår metodik är att alla kör med alla oavsett nivå.

          Namnet Kalvhagen är taget från Marcus Johansson´s moderklubb Kalvhagens Box Center i Karlskrona. Kalvhagen i Karlskrona är en av de mest framgånsrika kickboxningsklubbarna i Sverige som Thomas “Totto” Heiderup startade. “Totto” har vunnit det mesta man kan vinna och är en stor förebild för många.
          </p>
          <p> <b> Marcus Johansson</b>, grundare och ägare av KalvhagenSthlm;
          "Träning för mig ska vara individanpassad, utmanande, lärorik och rolig. Jag bli galet motiverad när man lyckas så ett frö hos en klient. Att få ge dem verktyg som gör att de steg för steg, dag för dag når sina mål och sin drömfysik.

          Att kunna se till vad kunden behöver, att använda kunskap och sunt förnuft - och inte vad den senaste trenden i kvällstidningen säger - blir mer och mer viktigt eftersom vi  hela tiden matas med ständigt nya dietmetoder och träningsknep."
          </p>
        </div>
      </div>
    );
  }
}

export default About;
