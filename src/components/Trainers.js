import React, {Component} from 'react';
import PortraitGrid from './common/PortraitGrid';

import marcus from "../../resources/trainer-marcus.jpg";
import raffi from "../../resources/trainer-raffi.jpg";
import veronica from "../../resources/trainer-veronica.jpg";
import sergio from "../../resources/trainer-sergio.jpg";
import petter from "../../resources/trainer-petter.jpg";
import jakob from "../../resources/trainer-jakob.jpg";
import harald from "../../resources/trainer-harald.jpg";
import romain from "../../resources/trainer-romain.jpg";
import trainer from "../../resources/trainer.jpg";

const trainers = [{
    name: 'Marcus',
    imgSrc: marcus,
    desc: "Marcus har tränat kampsport under många år. Allt från judo, karate, shootfighting till Thaiboxning. Han har tävlat och instruerat i Kickboxning under flera år och driver nu KalvhagenSthlm som han startade 2007 ; hans moderklubb är Kalvhagen i Karlskrona.",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Raffi',
    imgSrc: raffi,
    desc: "Raffi har tränat kickboxning och boxning i 7 år (2 år  av dessa ej aktiv ), han har gått 14 matcher  - 7 matcher i Armenien och 7 i Sverige. Raffi håller till på Kalvhagen Boxningscenter Märsta",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Veronica',
    imgSrc: veronica,
    desc: "Veronica är en av våra stand in´s på Kalvagen Veronica har tränat Kickboxning i ungefär 6 år, gått 14 matcher och tagit ett SM-silver som bästa merit. Jobbade som instruktör för  nybörjargruppen på Umeå Kampcenter 2009. Sedan årsskiftet 11/12 är Veronica verksam som instruktör på KalvhagenSthlm.",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Sergio',
    imgSrc: sergio,
    desc: "Sergio har tränat Kickboxning sedan 2009. Träning och sport har varit en passion sedan han var liten. \" Jag älskar att leda människor genom bra saker som berikar deras liv. Humor och glädje måste alltid finnas där - annars är det ingen mening. Det genomsyrar allt jag gör.\"",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Petter',
    imgSrc: petter,
    desc: "Petter är en av våra stand in´s på Kalvhagen. Petter började 2010 träna kickboxning på en klubb i centrala Stockholm, men då fokus där låg på att slåss  istället för träning, bytte han snart till Kalvhagen Sthlm. \"Det bästa med Kalvhagen är den ömsesidiga respekten mellan alla som är där och tränar. Vare sig du är 50 år och ville hålla dig i form eller om du är 18 och vill tävla.\"",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Jakob',
    imgSrc: jakob,
    desc: "",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Harald',
    imgSrc: harald,
    desc: "Kalvhagen är en klubb där alla visar respekt för varandra och det märks tydligt när man kliver in genom dörren. Det spelar ingen roll vilken nivå man kör på för man visar samma respekt mot alla och det är en viktigt grund för att alla ska må bra och ha kul på träningen.",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Romain',
    imgSrc: romain,
    desc: "Romain Schwab Fransman och Idrottslärare på dagtid. Gillar kinesiska konster och olika slags kampstunder. Började med kampsport för 22 år sen på grund av brorsan och kusinen som hade börjat träna Karate respektive Vietvodao i smyg. Det blev då Kung Fu för mig. Teknikextremist: en väl utförd teknik blir per automatik vacker och effektiv. Favotekniker: sidospark och backkick men akta tårna. Favorit peppord: \"Kör smart!\" Huvudet ska alltid vara med. Kännetecken: jag gillar ensamhet och är ganska tyst men inte sur, så tveka inte om du vill fråga mig nåt.",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Abgar',
    imgSrc: trainer,
    desc: "Ursprungligen från Armenien där han ingick i det Armenska boxningslandslaget, har tränat i 15 år och gått 80 matcher. Varit boxningstränare på Kalvhagen i Karlskrona under 5 år men har nu flyttat till Stockholm. Abgar är huvudtränare för boxningen på Kalvhagen Boxningscenter Märsta",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}];

class Trainers extends Component {

  render () {
    return (
      <div>
        <PortraitGrid trainers={trainers} />
      </div>
    );
  }
}


export default Trainers;
