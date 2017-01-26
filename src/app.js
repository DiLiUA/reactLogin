import { Provider } from 'react-redux';

import RootComponent from './components/root';
import congigureStore from './store/configureStore';

import 'bootstrap-sass/assets/stylesheets/_bootstrap-sprockets.scss';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
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
