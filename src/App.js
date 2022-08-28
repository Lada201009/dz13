import React from "react";
import Text from "./components/Text";
import Image from "./components/image";
import IMG from "./img/IMG.png";
import Image2 from "./components/image2";
import IMG2 from "./img/IMG2.png";


class App extends React.Component {
  helpText = "Create an account";
  helpText2 = "Create/login to an existing \n account to get started"
  helpText3 = "An account is created with your email and a desired password"
  helpText4 ="Explore varieties"
  helpText5 ="Shop for your favorites meal as e dey hot."
  helpText6 ="Shop for your favorite meals or drinks and enjoy while doing it."
  render() {
    return (
      <div className="name">
        <Text title="How the app works" />
        <Image image={IMG} />
        <h2 className="Orang">{this.helpText}</h2>
        <h2 className="Black">{this.helpText2}</h2>
        <h2 className="Grau">{this.helpText3}</h2>
        
        <h3 className="Orang">{this.helpText4}</h3>
        <h3 className="Black">{this.helpText5}</h3>
        <h3 className="Grau">{this.helpText6}</h3>
        <Image2 Image2={IMG2} />
      </div>
    );
  }
}

export default App;
