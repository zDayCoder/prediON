
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './componentes/Menu';
import Home from './paginas/HomePage';
import Predio from './paginas/Predios';
import {Create as Predio_Create} from './paginas/Predios/create';
import {Edit as Predio_Edit} from './paginas/Predios/edit';
import {Delete as Predio_Delete} from './paginas/Predios/delete';

function App() {
  return(
<div>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={ <Home />  } />
        <Route path="/predios" element={ <Predio />  } />
        <Route path="/predios/create" element={ <Predio_Create />  } />
        <Route path="/predios/edit/:id" element={ <Predio_Edit />  } />
        <Route path="/predios/delete/:id" element={ <Predio_Delete />  } />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
