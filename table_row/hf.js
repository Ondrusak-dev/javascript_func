/**
 * @type {{nemzetiseg:?, szerzo:string, mu:string[]}}
 */
const arr = [
    {
        nemzetiseg: 'Orosz',
        szerzo: 'Gogol',
        mu: 'A köpönyeg'
    },
    {
        szerzo: 'Csehov',
        mu: 'A csinovnyik halála'
    },
    {
        nemzetiseg: 'Cseh',
        szerzo: 'Franz Kafka',
        mu: 'Az átváltozás'
    },
    {
        nemzetiseg: 'Magyar',
        szerzo: 'Örkény István',
        mu: 'Egyperces novellák'
    },
    {
        szerzo: 'József Attila',
        mu: 'Klárisok'
    },
    {
        nemzetiseg: 'Svájc',
        szerzo: 'Friedrich Dürrenmatt',
        mu: 'A fizikusok'
    }
];

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const t = ["Nemzetiség", "Szerző", "Mű" ]

for (let a of t){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = a;
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for(let a of arr){
    const tr1 = document.createElement("tr")
    tbody.appendChild(tr1)
    
    const td = document.createElement("td")
    tr1.appendChild(td)
    td.innerText = a.nemzetiseg;

    const td1 = document.createElement("td")
    tr1.appendChild(td1)
    td1.innerText = a.szerzo;

    const td2 = document.createElement("td")
    tr1.appendChild(td2)
    td2.innerText = a.mu;

    if(a.nemzetiseg != undefined){
        const tr1 = document.createElement("tr")
        tbody.appendChild(tr1)

        const td3 = document.createElement("td")
        tr1.appendChild(td3)
        td3.innerText = a.nemzetiseg
        
        td.rowSpan = 2
    }
}



