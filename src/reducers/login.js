import ActionsEnum from '../enums/actions';

export default (
  state = {
    auth: {
      Auth: '',
      Language: ''
    },
    dataForm: {
      userLogin: '',
      userPassword: ''
    }
  },
  action
) => {

  switch (action.type) {

    case  ActionsEnum.LOGIN.FORM.CHANGE: {
      return state;
    }

    default:
      return state;
  }

};