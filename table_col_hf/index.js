/**
 * @type {{theme: string, time: string, scientist1: string, scientist2?: string}[]}
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

const thead = document.createElement('thead');
table.appendChild(thead)

const tr = document.createElement('tr');
thead.appendChild(tr)

<<<<<<< HEAD
const t = ["Fizika területe", "Időszak"]
=======
const t = ['Fizika területe','Időszak']
>>>>>>> dff087c581d3a5502484096c25b175bd8f69521f

for(let a of t){
    const th = document.createElement('th');
    tr.appendChild(th)
    th.innerText=a
}

const th3 = document.createElement('th');
th3.colSpan = 2;
th3.innerText = 'Képviselők';
tr.appendChild(th3);

const tbody = document.createElement('tbody');
table.appendChild(tbody)

for(const a of arr){
    const tr = document.createElement('tr');
    tbody.appendChild(tr)

    const td = document.createElement('td');
<<<<<<< HEAD
    tr.appendChild(td)
    td.innerText=a.theme

    const td2 = document.createElement('td');
    tr.appendChild(td2)
    td2.innerText=a.time

    const td3 = document.createElement('td');
    tr.appendChild(td3)
    td3.innerText=a.scientist1

    if(a.scientist2 === undefined){
        td2.colSpan = 2
        tr.appendChild(td2)
        
    }else{
        const td4 = document.createElement('td');
        td4.innerText=a.scientist2
        tr.appendChild(td4)
    }
    



=======
    td.innerText=element.theme
    tbody.appendChild(td)

    const td2 = document.createElement('td');
    td2.innerText=element.time
    tbody.appendChild(td2)

    const td3 = document.createElement('td');
    th3.colSpan="2"
    td3.innerText=element.scientist1
    tbody.appendChild(td3)
>>>>>>> dff087c581d3a5502484096c25b175bd8f69521f
}




