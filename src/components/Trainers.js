import React, {Component} from 'react';
import PortraitGrid from './common/PortraitGrid';

import marcus from "../../resources/trainer-marcus.jpg";

const trainers = [{
    name: 'Marcus1',
    imgSrc: marcus,
    desc: "Marcus har tränat kampsport under många år. Allt från judo, karate, shootfighting till Thaiboxning. Han har tävlat och instruerat i Kickboxning under flera år och driver nu KalvhagenSthlm som han startade 2007 ; hans moderklubb är Kalvhagen i Karlskrona.",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Marcus2',
    imgSrc: marcus,
    desc: "Marcus har tränat kampsport under månår och driver nu KalvhagenSthlm som han startade 2007 ; hans moderklubb är Kalvhagen i Karlskrona.",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Marcus3',
    imgSrc: marcus,
    desc: "Marcus har tränat kampsport under många år. Allt från judo, karate, shootfighting till Thaiboxning. Han har tävlat och instruerat i Kickboxning u KalvhagenSthlm som han startade 2007 ; hans moderklubb är Kalvhagen i Karlskrona.",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Marcus3',
    imgSrc: marcus,
    desc: "t i Kickboxning under flera år och driver nu KalvhagenSthlm som han startade 2007 ; hans moderklub fesf sbfjesbg kjesfg jkgb är Kalvhagen i Karlskrona.",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Marcus3',
    imgSrc: marcus,
    desc: "t i Kickboxning under flera år och driver nu KalvhagenSthlm som han startade 2007 ; hans moderklub fesf sbfjesbg kjesfg jkgb är Kalvhagen i Karlskrona.",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Marcus3',
    imgSrc: marcus,
    desc: "t i Kickboxning under flera år och driver nu KalvhagenSthlm s esnsg,s eesn grnsl rs esnsg,s eesn grnsl rs esnsg,s eesn grnsl rs esnsg,s eesn grnsl rs esnsg,s eesn grnsl rom han startade 2007 ; hans moderklub fesf sbfjesbg kjesfg jkgb är Kalvhagen i Karlskrona.",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Marcus3',
    imgSrc: marcus,
    desc: "t i Kickboxning under flera år och driver nu KalvhagenSthlm som han startade 2007 ; hans moderklub fesf sbfjesbg kjesfg jkgb är Kalvhagen i Karlskrona.",
    meriter: [
      "1:a mästergrad samt internationellt svart bälte (WKA)",
      "Tävlat med landslaget",
      "Nordisk Mästare",
      "5:a i  VM"
    ]
}, {
    name: 'Marcus3',
    imgSrc: marcus,
    desc: "t i Kickboxning under flera år och driver nu Kalvhagengrd,sgn rdkgjdslg lrn gödrg seär grgls r rsgksrälgk rm rskg rk srg äsel grSthlm som han startade 2007 ; hans moderklub fesf sbfjesbg kjesfg jkgb är Kalvhagen i Karlskrona.",
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
    )
  }
}


export default Trainers;
