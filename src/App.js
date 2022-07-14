import './App.less';
import { Provider } from 'react-redux';
import Main from './components/Main/Main'
import Dlina from './components/Units/Dlina/Dlina';
import Header from './components/Header/Header';
import Massa from './components/Units/Massa/Massa';
import Square from './components/Units/Square/Square'
import store from './redux/store';
import {BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {

  return (
    <div className="App">
      <div className='container'>
      <Provider store={store}>
      
        <BrowserRouter>
        <Routes>
          <Route path='*' element={<Main/>}></Route>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/massa' element={<Massa/>}></Route>
          <Route path='/dlina' element={<Dlina/>}></Route>
          <Route path='/square' element={<Square/>}></Route>

        </Routes>
        </BrowserRouter>
      </Provider>
      </div>
       
    </div>
  );
}

export default App;
