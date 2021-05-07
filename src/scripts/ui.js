// imports

let uifunc = (function () {

  // main class
  class Ui {

    constructor() {
      this.mainInfo_area = document.querySelector('#main-info');
      this.message_div = document.querySelector('#message');
      this.loading_snipper = document.querySelector('.loading');
    }

    showItems(curreny, cryptocurrency, data) {

      // clear data in first
      this.mainInfo_area.innerHTML = '';

      // show spinner image after clicked
      this.loading_snipper.style.display = 'block';

      // set curreny name in changes
      let currencyName = '';
      switch (curreny) {
        case 'USD':
          currencyName = 'Dollar';
          break;
        case 'GBP':
          currencyName = 'Pound';
          break;
        case 'EUR':
          currencyName = 'Euro';
          break;
      }

      // set curreny name in changes
      let cryptoName = '';
      switch (cryptocurrency) {
        case 'BTC':
          cryptoName = 'Bitcoin';
          break;
        case 'ETH':
          cryptoName = 'Ethereum';
          break;
        case 'XRP':
          cryptoName = 'Ripple';
          break;
      }

      let output = '';

      // create items for get info
      output = `
        <div class="infos">
          <img src="${data.logo_url}" class="crypto-img" alt="">
          <p>The price of ${cryptoName} to ${currencyName} is : <span>${data.price}</span></p>
          <p>Last hour change : <span>${data['1h'].price_change}</span></p>
          <p>Last day change : <span>${data['1d'].price_change}</span></p>
          <p>Last 7 Days change : <span>${data['7d'].price_change}</span></p>
        </div>
        `

      // show snipper
      setTimeout(() => {
        // hide spinner image after 3s
        this.loading_snipper.style.display = 'none';
        // set output into main area
        this.mainInfo_area.innerHTML = output;
      }, 3500);

    }

    showMassage(text, color) {
      // create alert element
      const Alertdiv = document.createElement('div');
      Alertdiv.textContent = text;
      Alertdiv.classList = `alert alert-${color} mt-3`;

      // append alert to message div
      if (!document.querySelector('.alert')) {
        this.message_div.appendChild(Alertdiv);
      }

      // timeout for remove alert
      setTimeout(() => {
        this.removeAlert();
      }, 3000);
    }

    removeAlert() {
      // get alert element
      const alert = document.querySelector('.alert');
      // check if exist
      if (alert) {
        document.querySelector('.alert').remove();
      }
    }

  }

  // class instance 
  const ui = new Ui();

  // return methods
  return {
    showItems: function (curreny, cryptocurrency, data) {
      ui.showItems(curreny, cryptocurrency, data);
    },
    showMassage: function (text, color) {
      ui.showMassage(text, color);
    }
  }

})()

// export function
export default uifunc;