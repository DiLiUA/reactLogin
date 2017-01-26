import { Provider } from 'react-redux';

import RootComponent from './components/root';
import congigureStore from './store/configureStore';
import './style.scss';

const render = () => {
  ReactDOM.render(
    <Provider store={congigureStore()}>
      <RootComponent/>
    </Provider>,
    document.getElementById('app')
  );
};

window.onload = () => render();
