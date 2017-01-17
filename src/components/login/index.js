import { connect } from 'react-redux';

import { Form, Button, FormGroup, FormControl } from 'react-bootstrap';

class AuthComponent extends React.Component {
  constructor(props) {
    super(...arguments);
  }

  static defaultProps = {
    auth: {
      Auth: '',
      Language: ''
    },
    form: {
      userLogin: '',
      userPassword: ''
    }
  };

  render () {
    return (
      <div id="auth_page">
        test Auth
      </div>
    );
  }
}

const mapStateProps = state => {
  return {...state.login}
};

export default connect(mapStateProps)(AuthComponent);