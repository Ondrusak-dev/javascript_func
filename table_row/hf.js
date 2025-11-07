/**
 * @type {{nemzetiseg:string, szerzo:string, mu1:string, szerzo2?:string, mu2?:string}[]}
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
        nationality: 'Svájc',
        szerzo: 'Friedrich Dürrenmatt',
        mu1: 'A fizikusok'
    },
]

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr1 = document.createElement('tr');
thead.appendChild(tr1);

const t = ["Nemzetiség", "Szerző", "Mű"];
for(let a of t) {
    const th = document.createElement('th');
    tr1.appendChild(th);
    th.innerText = a;
}

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

