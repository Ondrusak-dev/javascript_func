/**
 * @typedef {{nemzetiseg:string, szerzo:string, mu1:string, szerzo2?:string, mu2?:string}} CountryWriters
 */

/**
 * @type {{CountryWriters}[]}
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


const table = document.createElement('table');
document.body.appendChild(table);

const t = ["Nemzetiség", "Szerző", "Mű"];
generateHeader(table, t)

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (let a of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const td1 = document.createElement('td');
    tr2.appendChild(td1);
    td1.innerText = a.nemzetiseg;
    td1.addEventListener('click', function(e){
    /**
     * @type {HTMLTableCellElemet}
     */
       const a = e.target;
       a.classList.add('marked');
    });

    const td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.innerText = a.szerzo;

    const td3 = document.createElement('td');
    tr2.appendChild(td3);
    td3.innerText = a.mu1;

    if (a.mu2 != undefined && a.szerzo2 != undefined) {
        const tr3 = document.createElement('tr');
        tbody.appendChild(tr3);

        const td4 = document.createElement('td');
        tr3.appendChild(td4);
        td4.innerText = a.szerzo2;

        const td5 = document.createElement('td');
        tr3.appendChild(td5);
        td5.innerText = a.mu2;

        td1.rowSpan = 2;
    }
}

const form = document.getElementById('htmlform')
form.addEventListener('submit', htmlformEventlistener);


// hf:

const tableHF = document.createElement('table');
document.body.appendChild(tableHF);

const theadHF = document.createElement('thead');
tableHF.appendChild(theadHF);

const trHead = document.createElement('tr');
theadHF.appendChild(trHead);

const headers = ["Nemzetiség", "Szerző", "Mű"];

for (const text of headers) {
    createCell('th', text, trHead)
    // const th = document.createElement('th');
    // th.innerText = text;
    // trHead.appendChild(th);
}

const tbodyHF = document.createElement('tbody');
tbodyHF.id = 'tbody_hf';
tableHF.appendChild(tbodyHF);




const formHF = document.getElementById('htmlform');
formHF.addEventListener('submit', function(e) {
    e.preventDefault();

    const f = e.target;

    /**
     * @type {{CountryWriters}}
     */
    const ujElem = {
        nemzetiseg: f.querySelector('#nemzetiseg').value,
        szerzo: f.querySelector('#szerzo1').value,
        mu1: f.querySelector('#mu1').value,
        szerzo2: f.querySelector('#szerzo2').value,
        mu2: f.querySelector('#mu2').value
    };

    arr.push(ujElem);
    renderTableBodyHF(arr);
    f.reset();
});


renderTableBodyHF(arr);
