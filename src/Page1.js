import React, {Component} from 'react';
import './css/page.css';

class Page1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    //debugger;
  }

    render() {

        return (
            <div>
                <p className="title">Page numer uno</p>
                <div className="page">
                  <p>Här skulle man kunna lägga nån slags feed?</p>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum mauris mattis, tempor odio eu, commodo lacus. Curabitur eget elit ac dolor suscipit interdum. Vivamus maximus neque vitae elit tempor, et porta ante tincidunt. Sed enim orci, eleifend ac pulvinar in, convallis eu nunc. Integer aliquam urna ut leo semper maximus. Nullam iaculis dolor justo, vel consectetur purus commodo eu. Duis neque justo, blandit non vulputate vitae, tristique sed arcu.
                  Ut non diam pulvinar, varius purus nec, mollis ipsum. Nam dignissim, justo quis consectetur aliquet, eros arcu vestibulum mauris, at imperdiet purus diam venenatis quam. Quisque diam lectus, vulputate id lectus pharetra, dignissim bibendum nunc. Suspendisse potenti. Proin nec quam eu dui fringilla accumsan id sed est. Quisque luctus elementum risus, quis hendrerit lectus aliquam id. Aenean auctor est id dapibus tristique. In a gravida sapien. Sed convallis arcu diam, id mollis justo posuere sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam euismod, dolor finibus ultricies sodales, libero elit scelerisque neque, vitae consequat velit ex quis urna. Praesent id iaculis risus. Suspendisse molestie finibus velit. Suspendisse finibus, nunc eu vehicula auctor, diam nunc dapibus sem, pretium iaculis quam dolor sed dui. Integer finibus finibus magna vitae molestie. Fusce eget purus nec odio ultrices posuere.
                  Nullam finibus pulvinar odio vehicula mattis. Vestibulum sagittis ligula eget elit blandit imperdiet eu fringilla elit. Curabitur tempus diam ac mollis congue. Ut gravida placerat enim quis varius. Aenean bibendum gravida massa sit amet mollis. Etiam at risus augue. Mauris sit amet ornare elit. Donec venenatis mauris augue, id congue eros tincidunt non. Mauris pellentesque maximus vehicula. Duis id tellus eu turpis auctor elementum. Donec arcu elit, maximus eu aliquet quis, pellentesque eu erat. </p>
                  <p> HEj hej hejjkaf ejkhfejskl jeös </p>
                  <text className="quote"> "Så här skulle man kunna lägga ett stiligt citat kanske? <br />Som däremot kanske behöver vara lite längre"</text>
                  <p> Mer vänster-ställda saker här nånstans </p>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum mauris mattis, tempor odio eu, commodo lacus. Curabitur eget elit ac dolor suscipit interdum. Vivamus maximus neque vitae elit tempor, et porta ante tincidunt. Sed enim orci, eleifend ac pulvinar in, convallis eu nunc. Integer aliquam urna ut leo semper maximus. Nullam iaculis dolor justo, vel consectetur purus commodo eu. Duis neque justo, blandit non vulputate vitae, tristique sed arcu.
                  Ut non diam pulvinar, varius purus nec, mollis ipsum. Nam dignissim, justo quis consectetur aliquet, eros arcu vestibulum mauris, at imperdiet purus diam venenatis quam. Quisque diam lectus, vulputate id lectus pharetra, dignissim bibendum nunc. Suspendisse potenti. Proin nec quam eu dui fringilla accumsan id sed est. Quisque luctus elementum risus, quis hendrerit lectus aliquam id. Aenean auctor est id dapibus tristique. In a gravida sapien. Sed convallis arcu diam, id mollis justo posuere sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam euismod, dolor finibus ultricies sodales, libero elit scelerisque neque, vitae consequat velit ex quis urna. Praesent id iaculis risus. Suspendisse molestie finibus velit. Suspendisse finibus, nunc eu vehicula auctor, diam nunc dapibus sem, pretium iaculis quam dolor sed dui. Integer finibus finibus magna vitae molestie. Fusce eget purus nec odio ultrices posuere.
                  Nullam finibus pulvinar odio vehicula mattis. Vestibulum sagittis ligula eget elit blandit imperdiet eu fringilla elit. Curabitur tempus diam ac mollis congue. Ut gravida placerat enim quis varius. Aenean bibendum gravida massa sit amet mollis. Etiam at risus augue. Mauris sit amet ornare elit. Donec venenatis mauris augue, id congue eros tincidunt non. Mauris pellentesque maximus vehicula. Duis id tellus eu turpis auctor elementum. Donec arcu elit, maximus eu aliquet quis,</p>
                  <p> Om vi gör den här lite bredare klan vi trycka in typ prislista eller annat skoj här !?
                    <h3> PRISLISTA: </h3>
                  </p>
                </div>

            </div>
        );
    }
}

export default Page1;
