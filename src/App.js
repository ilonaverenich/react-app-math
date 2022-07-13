import './App.less';
import { Provider } from 'react-redux';
import Main from './components/Main/Main.jsx';
import Dlina from './components/Dlina';
import Header from './components/Header';
import Massa from './components/Massa';
import Square from './components/Square';
import store from './redux/store';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <div className='container'>
      <Provider store={store}>
      <Header/>
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
