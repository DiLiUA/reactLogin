import ActionsEnum from '../enums/actions';
import RequestHelper from '../helpers/request';
import StoreHelper from '../helpers/store';

export const changeAuthField = (form = {
  data: {
    login: '',
    password: ''
  },
  sending: true
}) => {

  return {
    type: ActionsEnum.LOGIN.FORM.CHANGE,
    form
  };

};

export const submitLoginForm = (data = {}) => {
  StoreHelper.dispatch(login.start());

  RequestHelper._post('/login', data)
    .then(data => {
      console.log('login was successful', data);
      StoreHelper.dispatch(login.success(data));
    })
    .catch(error => {
      console.log('login was failed', error);
      StoreHelper.dispatch(login.error(error));
    })
};

const login = {
  start() {
    return {
      type: ActionsEnum.LOGIN.FORM.START
    }
  },

  success(data = {}) {
    return {
      type: ActionsEnum.LOGIN.FORM.SUCCESS,
      data
    }
  },

  error(error = {}) {
    return {
      type: ActionsEnum.LOGIN.FORM.ERROR,
      error
    }
  }
};