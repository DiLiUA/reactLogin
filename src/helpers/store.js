export default class StoreHelper {
  static _store = null;

  static init(store = {}) {
    this._store = store;
  }

  static dispatch(action = {}) {
    this._store.dispatch(action);
  }
};