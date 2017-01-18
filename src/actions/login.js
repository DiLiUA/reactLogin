import ActionsEnum from '../enums/actions';

export const changeAuthField = (
  form = {
    data: {
      login: '',
      password: ''
    },
    sending: true
  }
) => {

  return {
    type: ActionsEnum.LOGIN.FORM.CHANGE,
    form
  };
};

export const submitLoginForm = (
  form = {
    login: '',
    password: ''
  }
) => {

  return {
    type: ActionsEnum.LOGIN.FORM.SUBMIT_AUTH,
    form
  };
};