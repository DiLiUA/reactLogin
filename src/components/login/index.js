import { connect } from 'react-redux';

import { changeAuthField, submitLoginForm } from '../../actions/login';
import { Form, Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

class AuthComponent extends React.Component {
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
    const target = evt.target || evt.srcElement;
    const loginVal = target.login_input.value.trim();
    const passVal = target.password_input.value.trim();

    const data = {
      login: loginVal,
      password: passVal
    };

    submitLoginForm(data);
  }

  onChange(evt) {
    const target = evt.target || evt.srcElement;
    const formAuth = target.closest('form');
    const loginVal = formAuth.login_input.value.trim();
    const passVal = formAuth.password_input.value.trim();

    const form = {
      data: {
        login: loginVal,
        password: passVal
      }
    };

    this.props.dispatch(changeAuthField(form));
  }

  render () {
    return (
      <div id='auth_page'>
        {
          this.props.auth.Auth !== 'Logged'
          ?
          <LoginForm
            {
              ...Object.assign({}, this.props, {
                onSubmit: this.onSubmit,
                onChange: this.onChange
              })
            }
          />
          :
          <SuccessNotification />
        }

      </div>
    );
  }
}

const LoginForm = (props) => {
  return (
    <Form
      name='auth'
      className='auth_form'
      autoComplete='off'
      onSubmit={props.onSubmit}
    >
      <div className='auth_form__title'>Login</div>

      <FormGroup className={props.auth.Auth === 'Denied' ? 'has-error' : ''}>
        <FormControl
          type='text'
          defaultValue=''
          name='login'
          id='login_input'
          className='input_field'
          placeholder='Login'
          onChange={props.onChange}
        />
      </FormGroup>

      <FormGroup className={props.auth.Auth === 'Denied' ? 'has-error' : ''}>
        <FormControl
          type='password'
          defaultValue=''
          name='login'
          id='password_input'
          className='input_field'
          placeholder='Password'
          onChange={props.onChange}
        />
      </FormGroup>

      <Button
        type={!props.form.sending ? 'submit' : 'button'}
        className='login_btn'
        //disabled={!(props.form.data.login && props.form.data.password) && !props.form.sending}
      >
        { props.form.sending ?
          <span><i className='fa fa-cog fa-spin fa-3x fa-fw'></i></span>
          :
          <span>
              Login

              <i className='fa fa-long-arrow-right'></i>
            </span>
        }
      </Button>

    </Form>
  );
};

const SuccessNotification = () => {
  return (
    <div className='auth_success'>
      <Glyphicon glyph='ok'/>
      &nbsp;
      Successful logged</div>
  )
}

const mapStateProps = state => {
  return {...state.login}
};

export default connect(mapStateProps)(AuthComponent);