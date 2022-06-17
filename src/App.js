import './App.less';
import { Provider } from 'react-redux';
import Component from './Component';
import store from './redux/store';


function App() {


  return (
    <div className="App">
      <Provider store={store}>
        <Component/>
      </Provider>
       
    </div>
  );
}

export default App;
