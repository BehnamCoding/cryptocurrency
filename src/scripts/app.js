// imports
import handle from './handle';
import ui from './ui';


// variables
const btn_valuation = document.querySelector('#btn-search');
const currency_input = document.querySelector('#currency');
const cryptocurrency_input = document.querySelector('#cryptocurrency');


// loadEventListener
loadAllEvents();

function loadAllEvents() {

    // execute function after button pressed
    btn_valuation.addEventListener('click', getInfo);

}

// functions

// getInfo
function getInfo() {
    // get input values
    const currency = currency_input.value;
    const cryptocurrency = cryptocurrency_input.value;

    // fetch api
    if ((currency === '' || cryptocurrency === '')) {
        ui.showMassage('Pease fill All inputs.', 'danger');
    } else {
        // get data from url
        handle.getApi(currency, cryptocurrency)
            .then(info => {
                return info.json();
            }).then(data => {
                const dataArray = data[0];
                ui.showItems(currency, cryptocurrency, dataArray);
            })
            .catch(error => console.log(error));
    }
}