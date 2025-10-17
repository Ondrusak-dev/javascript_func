/**
 * @type {{theme: string, time: string, scientist1: string, scientist2?: string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. század',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'Reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX–XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX–XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
];

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

const th1 = document.createElement('th');
th1.innerText = 'Fizika területe';
tr.appendChild(th1);

const th2 = document.createElement('th');
th2.innerText = 'Időszak';
tr.appendChild(th2);

const th3 = document.createElement('th');
th3.colSpan = 2;
th3.innerText = 'Képviselők';
tr.appendChild(th3);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const element of arr) {
    const row = document.createElement('tr');
    tbody.appendChild(row);

    const td = document.createElement('td');
    td.innerText = element.theme;
    row.appendChild(td);

    const tdt = document.createElement('td');
    tdt.innerText = element.time;
    row.appendChild(tdt);

    const tdScientist1 = document.createElement('td');
    tdScientist1.innerText = element.scientist1;

    if (element.scientist2 === undefined) {
        tdScientist1.colSpan = 2;
        row.appendChild(tdScientist1);
    } else {
        row.appendChild(tdScientist1);

        const tdScientist2 = document.createElement('td');
        tdScientist2.innerText = element.scientist2;
        row.appendChild(tdScientist2);
    }
}
/**
 * 
 * @param {string} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} cellrow 
 */
function createCellElement(celltype, cellcontent, cellrow){
    const a = document.createElement(celltype)
    a.innerText=cellcontent
    cellrow.appendChild(a)

    




}
