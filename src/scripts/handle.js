// imports

const handleFunc = (function () {

  // main class
  class Handle {

    constructor() {
      this.apiKey = '55b2cc8ef815cbe898bbe734ecf359cc';
    }

    getApi(currency , cryptocurrency) {
      // create url api
      let url = `https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}&ids=${cryptocurrency}&interval=1h,1d,7d&convert=${currency}`;

      // fetch url
      return fetch(url);
    }

  }

  // class instance
  const hndl = new Handle();

  // return methods
  return {
    getApi: function (currency , cryptocurrency) {
      return hndl.getApi(currency , cryptocurrency);
    }
  }

})()

// export function
export default handleFunc;