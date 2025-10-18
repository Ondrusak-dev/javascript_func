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

createCellElement('th', 'Fizika területe', tr)

// const th1 = document.createElement('th');
// th1.innerText = 'Fizika területe';
// tr.appendChild(th1);

createCellElement('th', 'Időszak', tr)

// const th2 = document.createElement('th');
// th2.innerText = 'Időszak';
// tr.appendChild(th2);

const cell = createCellElement('th', 'Képviselők', tr)
cell.colSpan= 2

// const th3 = document.createElement('th');
// th3.colSpan = 2;
// th3.innerText = 'Képviselők';
// tr.appendChild(th3);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const element of arr) {
    const row = document.createElement('tr');
    tbody.appendChild(row);

    createCellElement('td', element.theme, row)
    // const td = document.createElement('td');
    // td.innerText = element.theme;
    // row.appendChild(td);

    createCellElement('td', element.time, row)
    // const tdt = document.createElement('td');
    // tdt.innerText = element.time;
    // row.appendChild(tdt);


    const cell = createCellElement('td', element.scientist1, row)


    // const tdScientist1 = document.createElement('td');
    // tdScientist1.innerText = element.scientist1;
    // row.appendChild(tdScientist1);

    if (element.scientist2 === undefined) {
        cell.colSpan = 2;
    } else {
        // const tdScientist2 = document.createElement('td');
        // tdScientist2.innerText = element.scientist2;
        // row.appendChild(tdScientist2);

        createCellElement('td', element.scientist2, row)
    }
}
/**
 * 
 * @param {string} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} cellrow 
 * @returns {HTMLTableCellElement}
 */
function createCellElement(celltype, cellcontent, cellrow){
    const a = document.createElement(celltype)
    a.innerText=cellcontent
    cellrow.appendChild(a)
    return a;

}

