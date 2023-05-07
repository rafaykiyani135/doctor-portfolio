import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';
import "./assets/fontawesome/webfonts/OktaNeue-Black.ttf"
import "./assets/fontawesome/webfonts/OktaNeue-Bold.ttf"
import "./assets/fontawesome/webfonts/OktaNeue-Medium.ttf"
import "./assets/fontawesome/webfonts/OktaNeue-Normal.ttf"

function App() {
  return (
   <>
      <Router >
          <Routing />
      </Router>
   </>
  );
}

export default App;
