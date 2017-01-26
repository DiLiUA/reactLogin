import ActionsEnum from '../enums/actions';
import RequestHelper from '../helpers/request';
import StoreHelper from '../helpers/store';

export const changeAuthField = (field, value) => {

  return {
    type: ActionsEnum.LOGIN.FORM.CHANGE,
    field,
    value
  };

};

export const submitLoginForm = (data = {}) => {
  StoreHelper.dispatch(login.start());
  // we set timeout only for test visible loading btn. You can delete it If you want
  RequestHelper._post('/login', data)
    .then(data => setTimeout(() =>StoreHelper.dispatch(login.success(data)), 1500))
    .catch(error => setTimeout(() => StoreHelper.dispatch(login.error(error)), 1500));
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