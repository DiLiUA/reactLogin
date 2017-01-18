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

export const submitLoginForm = (data = {}) => {

};

export const submitLoginForm133 = (
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