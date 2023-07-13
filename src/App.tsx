import { Banner } from './components/Banner';
import { Header } from './components/Header';
import Model3 from './assets/model3.jpeg';
import Models from './assets/models.jpg';
import Modelx from './assets/modelx.jpg';
import ModelY from './assets/modely.webp';
import SolarRoof from './assets/solarRoof.jpeg';
import SolarPanels from './assets/solarPanels.jpeg';
import Powerwall from './assets/powerwall.jpg';
import { AppTheme } from './theme/ThemeProvider';

function App() {
  return (

    <AppTheme>
      <Header />
      <Banner Img={Model3} id='Model3' Title="Model 3" />
      <Banner Img={Models} id='Models' Title="Model S"/>
      <Banner Img={Modelx} id='Modelx' Title="Model X"/>
      <Banner Img={ModelY} id='ModelY' Title="Model Y"/>
      <Banner Img={SolarRoof} id='SolarRoof' Title="Solar Roof"/>
      <Banner Img={SolarPanels} id='SolarPanels' Title="Solar Panels"/>
      <Banner Img={Powerwall} id='Powerwall' Title="Powerwall"/>

    </AppTheme>
  );
}

export default App;
