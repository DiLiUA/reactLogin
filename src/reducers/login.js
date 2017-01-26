import ActionsEnum from '../enums/actions';

const initialState = {
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

export default (state = initialState, action) => {

  switch (action.type) {

    case  ActionsEnum.LOGIN.FORM.CHANGE: {
      const data = Object.assign({}, state.form.data);
      data[action.field] = action.value;

      return Object.assign({}, state, {
        form: Object.assign({}, state.form, { data }),
        auth: Object.assign({}, initialState.auth)
      });
    }

    case ActionsEnum.LOGIN.FORM.START: {
      return Object.assign({}, state, {
          form: Object.assign({}, state.form, {sending: true})
        }
      );
    }

    case ActionsEnum.LOGIN.FORM.SUCCESS: {
      return Object.assign({}, initialState, {
          auth: Object.assign({}, initialState.auth, action.data),
          from: Object.assign({}, initialState.form) // reset form
        }
      );
    }

    case ActionsEnum.LOGIN.FORM.ERROR: {
      return Object.assign({}, state,
        { auth: Object.assign({}, state.auth, action.error) },
        { form: Object.assign({}, state.form, {sending: false}) },
      );
    }

    default:
      return state;
  }

};