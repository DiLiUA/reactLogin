import ActionsEnum from '../enums/actions';

export default (
  state = {
    auth: {
      Auth: '',
      Language: ''
    },
    form: {
      login: '',
      password: ''
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