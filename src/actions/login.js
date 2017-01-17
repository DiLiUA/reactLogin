import ActionsEnum from '../enums/actions';

export const changeAuthField = (
  form = {
    login: '',
    password: ''
  }
) => {

  return {
    type: ActionsEnum.LOGIN.FORM.CHANGE,
    form
  };
};