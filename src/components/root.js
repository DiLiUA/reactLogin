import { connect } from 'react-redux';

import AuthComponent from './login'

class RootComponent extends React.Component {
  render () {
    return (
      <div id="root">
        <AuthComponent />
      </div>
    );
  }
}

export default connect()(RootComponent);