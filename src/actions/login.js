import ActionsEnum from '../enums/actions';
import RequestHelper from '../helpers/request';
import StoreHelper from '../helpers/store';

export const changeAuthField = (form = {
  data: {
    login: '',
    password: ''
  },
  sending: false
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
      setTimeout(function () { //Settimeout only for test visible loading btn. You can delete it If you want
        StoreHelper.dispatch(login.success(data)); // login was successful
      }, 500);
    })
    .catch(error => {
      setTimeout(function () { // Settimeout only for test visible loading btn. You can delete it If you want
        StoreHelper.dispatch(login.error(error)); //login was failed
      }, 500);
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