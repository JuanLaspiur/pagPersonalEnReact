import Conteiner1 from './componentes/conteiner1/Conteiner1';
import Conteiner2 from './componentes/conteiner2/Conteiner2';
import Conteiner3 from './componentes/conteiner3/Conteiner3';
import Header from './componentes/headerDos/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Header/>
      <main>
        <Conteiner1/>
        <Conteiner2/>
        <Conteiner3/>
        
      </main>
    </div>
  );
}


export default App;
