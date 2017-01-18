import ActionsEnum from '../enums/actions';

export default (
  state = {
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
  },
  action
) => {

  switch (action.type) {

    case  ActionsEnum.LOGIN.FORM.CHANGE: {
      const copyState = Object.assign({}, state, {form: Object.assign({}, state.form, action.form)});
      return copyState;
    }

    case ActionsEnum.LOGIN.FORM.SUBMIT_AUTH: {
      const copyState = Object.assign({}, state, {form: Object.assign({}, state.form, action.form)});
      return copyState;
    }

    default:
      return state;
  }

};