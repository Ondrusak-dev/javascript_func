/**
 * @typedef {{nemzetiseg:string, szerzo:string, mu1:string, szerzo2?:string, mu2?:string}} CountryWriters
 */

/**
 * @type {CountryWriters[]}
 */
const arr = [
    {
        nemzetiseg: 'Orosz',
        szerzo: 'Gogol',
        mu1: 'A köpönyeg',
        szerzo2: 'Csehov',
        mu2: 'A csinovnyik halála'
    },
    {
        nemzetiseg: 'Cseh',
        szerzo: 'Franz Kafka',
        mu1: 'Az átváltozás'
    },
    {
        nemzetiseg: 'Magyar',
        szerzo: 'Örkény István',
        mu1: 'Egyperces novellák',
        szerzo2: 'József Attila',
        mu2: 'Klárisok'
    },
    {
        nemzetiseg: 'Svájc',
        szerzo: 'Friedrich Dürrenmatt',
        mu1: 'A fizikusok'
    },
]


/**
 * @type {{header:string, formFields:FormField[]}}
 */
const objData = {
    header: ["Nemzetiség", "Szerző", "Mű"],
    formFields: [
        {
            id: "nemzetiseg",
            label: "Nemzetiség:"
        },
        {
            id: "szerzo",
            label: "Szerző:"
        },
        {
            id: "mu1",
            label: "Mű:"
        },
        {
            id: "szerzo2",
            label: "Másik szerző:"
        },
        {
            id: "mu2",
            label: "Mű:"
        },
    ]
}


generateTable(objData.header, "tablebody");

renderTableBody(arr);

const htmlFormElem = document.getElementById('htmlform');
htmlFormElem.addEventListener('submit', HTMLFormEventListener)

const dynForm = document.createElement('form');
document.body.appendChild(dynForm)

for (const fItem of objData.formFields) {
    createFormElement(dynForm, fItem.id, fItem.label);
}

dynForm.addEventListener('submit', function(e){
    e.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const activeForm = e.target;

    /**
     * @type {HTMLInputElement}
     */
    const nemzetisegInput = activeForm.querySelector('#nemzetiseg');
    /**
     * @type {HTMLInputElement}
     */
    const szerzoInput = activeForm.querySelector('#szerzo');
    /**
     * @type {HTMLInputElement}
     */
    const elsoMuInput = activeForm.querySelector('#mu1');
    /**
     * @type {HTMLInputElement}
     */
    const szerzoMasodikInput = activeForm.querySelector('#szerzo2');
    /**
     * @type {HTMLInputElement}
     */
    const masodikMuInput = activeForm.querySelector('#mu2');


    /**
     * @type {string}
     */
    const nemzValue = nemzetisegInput.value;
    /**
     * @type {string}
     */
    const szerzValue = szerzoInput.value;
    /**
     * @type {string}
     */
    const mu1Value = elsoMuInput.value;
    /**
     * @type {string}
     */
    const szerzo2Value = szerzoMasodikInput.value;
    /**
     * @type {string}
     */
    const mu2Value = masodikMuInput.value;


    /**
     * @type {CountryWriters}
     */
    const newObj = { }

    if (!validateFields(nemzetisegInput, szerzoInput, elsoMuInput)){
        return;
    }

    newObj.nemzetiseg = nemzValue;
    newObj.szerzo = szerzValue;
    newObj.mu1 = mu1Value;

    newObj.szerzo2 = szerzo2Value !== "" ? szerzo2Value : undefined;
    newObj.mu2 = mu2Value !== "" ? mu2Value : undefined;

    arr.push(newObj);

    renderTableBody(arr);
})

const submitBtn = document.createElement('button');
submitBtn.innerText = 'Hozzáadás';
dynForm.appendChild(submitBtn);
