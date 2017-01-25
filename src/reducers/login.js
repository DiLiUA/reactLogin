import ActionsEnum from '../enums/actions';

const defaultState = {
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

export default (state = defaultState, action) => {

  switch (action.type) {

    case  ActionsEnum.LOGIN.FORM.CHANGE: {
      const copyState = Object.assign({}, state, {form: Object.assign({}, state.form, action.form)});
      return copyState;
    }

    case ActionsEnum.LOGIN.FORM.START: {
      const copyState = Object.assign({}, state, {form: Object.assign({}, state.form, {sending: true})});
      return copyState;
    }

    case ActionsEnum.LOGIN.FORM.SUCCESS: {
      const copyState = Object.assign({}, defaultState, {auth: Object.assign({}, defaultState.auth, action.data)});
      return copyState;
    }

    case ActionsEnum.LOGIN.FORM.ERROR: {
      const copyState = Object.assign({},
        state,
        {auth: Object.assign({}, state.auth, action.error)},
        {form: Object.assign({}, state.form, {sending: false})},
      );
      console.log(copyState.auth);
      return copyState;
    }

    default:
      return state;
  }

};