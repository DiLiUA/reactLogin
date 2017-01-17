import { Provider } from 'react-redux';

import congigureStore from './store/configureStore';

const render = () => {
  ReactDOM.render(
    <Provider store={congigureStore()}>
      <div>test</div>
    </Provider>,
    document.getElementById('app')
  );
};

window.onload = function () {
  render();
};
