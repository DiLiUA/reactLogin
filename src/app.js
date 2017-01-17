import { Provider } from 'react-redux';

import RootComponent from './components/root';

import congigureStore from './store/configureStore';

const render = () => {
  ReactDOM.render(
    <Provider store={congigureStore()}>
      <RootComponent/>
    </Provider>,
    document.getElementById('app')
  );
};

window.onload = function () {
  render();
};
