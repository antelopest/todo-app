export default class Store {
  #state = {};
  #listeners = new Set();

  constructor(initialState = {}) {
    this.#state = initialState;
  }

  getState() {
    return this.#state;
  }

  setState(newState) {
    this.#state = newState;

    this.#notify();
  }

  subscribe(callback) {
    this.#listeners.add(callback);

    return () => {
      this.#listeners.delete(callback);
    };
  }

  #notify() {
    this.#listeners.forEach((callback) => {
      callback();
    });
  }
}
