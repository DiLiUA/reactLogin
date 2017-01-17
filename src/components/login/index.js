import { connect } from 'react-redux';

import { Form, Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

class AuthComponent extends React.Component {
  constructor(props) {
    super(...arguments);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault();
    console.log('submit');
  }

  onChange(evt) {
    console.log('change');
  }

  static defaultProps = {
    auth: {
      Auth: '',
      Language: ''
    },
    form: {
      login: '',
      password: ''
    }
  };

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

      <FormGroup>
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

      <FormGroup>
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
        type='submit'
        className='login_btn'
      >
        Login
      </Button>

    </Form>
  );
};

const SuccessNotification = () => {
  return (
    <div className="">
      <Glyphicon glyph="ok" />
      &nbsp;
      Successful logged</div>
  )
}

const mapStateProps = state => {
  return {...state.login}
};

export default connect(mapStateProps)(AuthComponent);