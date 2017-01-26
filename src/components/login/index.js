import { connect } from 'react-redux';
import { Form, Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

import { changeAuthField, submitLoginForm } from '../../actions/login';
import StatusesEnum from '../../enums/statuses';

class LoginComponent extends React.Component {

  constructor(props) {
    super(...arguments);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  static defaultProps = {
    auth: {
      Auth: '',
      Language: ''
    },
    form: {
      data: {
        login: '',
        password: ''
      },
      sending: false
    }
  };

  static propTypes ={
    auth: React.PropTypes.object,
    form: React.PropTypes.object,
  };

  onSubmit(evt) {
    evt.preventDefault();
    submitLoginForm(this.props.form.data);
  }

  onChange(evt) {
    const target = evt.target || evt.srcElement;
    this.props.dispatch(changeAuthField(target.name, target.value));
  }

  render () {
    return (
      <div id="auth_page">
        {
          ['', StatusesEnum.DENIED].includes(this.props.auth.Auth) ?
            <LoginForm
              {
                ...Object.assign({}, this.props, {
                  onSubmit: this.onSubmit,
                  onChange: this.onChange
                })
              }
            /> : <SuccessNotification />
        }
      </div>
    );
  }
}

const LoginForm = (props) => {
  return (
    <Form
      name="auth"
      className="auth_form"
      autoComplete="off"
      onSubmit={props.onSubmit}
    >
      <div className="auth_form__title">Login</div>

      <FormGroup className={props.auth.Auth === StatusesEnum.DENIED ? 'has-error' : ''}>
        <FormControl
          type="text"
          defaultValue=""
          name="login"
          id="login_input"
          className="input_field"
          placeholder="Login"
          onChange={props.onChange}
        />
      </FormGroup>

      <FormGroup className={props.auth.Auth === StatusesEnum.DENIED ? 'has-error' : ''}>
        <FormControl
          type="password"
          defaultValue=""
          name="password"
          id="password_input"
          className="input_field"
          placeholder="Password"
          onChange={props.onChange}
        />
      </FormGroup>

      <Button
        type={props.form.sending ? 'button' : 'submit'}
        className="login_btn"
        disabled={props.form.sending}
      >
        {
          props.form.sending ?
            <span><i className="fa fa-cog fa-spin fa-3x fa-fw"></i></span>
            :
            <span>Login <i className="fa fa-long-arrow-right"></i></span>
        }
      </Button>

    </Form>
  );
};

const SuccessNotification = () => {
  return (
    <div className="auth_success">
      <Glyphicon glyph="ok"/>&nbsp;Successful logged
    </div>
  )
};

const mapStateProps = state => state.login;
export default connect(mapStateProps)(LoginComponent);