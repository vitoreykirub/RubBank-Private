import CallToAction from './calltoaction';
import Card from './cards';
import Footer from './footer';
import { GlobalStyle } from './global.style';
import Header from './header/index';
import Main from './main/index';
import Steps from './steps';
import YouFirst from './you_first';


function App() {
  return (
    <><GlobalStyle></GlobalStyle>
    <Header></Header>
    <Main></Main>
    <Card></Card>
    <YouFirst></YouFirst>
    <Steps></Steps>
    <CallToAction></CallToAction>
    <Footer></Footer>
    </>
    
  )
}

export default App;
