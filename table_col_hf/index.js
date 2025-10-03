/**
 * @type{{theme: string, time: string, scientist1: string, scientist2?: string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement('table');
document.body.appendChild(table)
//createElement: letrehoz egy html elemet a memóriában
//appendChild: hozzáfűz egy html elemet valamihez

const thead = document.createElement('thead');
table.appendChild(thead)

const tr = document.createElement('tr');
thead.appendChild(tr)

const th = document.createElement('th');
th.innerText="Fizika területe"
tr.appendChild(th)

const th2 = document.createElement('th');
th2.innerText="Időszak"
tr.appendChild(th2)

const th3 = document.createElement('th');
th3.colSpan="2"
th3.innerText="képviselők"
tr.appendChild(th3)

const tbody = document.createElement('tbody');
table.appendChild(tbody)

for(const element of arr){
    const td = document.createElement('td');
td.innerText=element.theme
tbody.appendChild(td)

const td2 = document.createElement('td');
td2.innerText=element.time
tbody.appendChild(td2)

const td3 = document.createElement('td');
th3.colSpan="2"
td3.innerText=element.scientist1
tbody.appendChild(td3)
}




