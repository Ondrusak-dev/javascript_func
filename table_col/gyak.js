/**
 * @type {{nev:string, kor:string, szer1:string, szer2:?}[]}
 */
const arr = [
    {
        nev: 'Balassi Bálint',
        kor: 'reformáció',
        szer1: 'Losonczy Anna',
        szer2: 'Dobó Krisztina'
    },

    {
        nev: 'Csokonai Vitéz Mihály',
        kor: 'felvilágosodás',
        szer1: 'Vajda Juliána',
    },
    {
        nev: 'Petőfi Sándor',
        kor: 'magyar romantika	',
        szer1: 'Mednyánszky Berta',
        szer2: 'Szendrey Júlia'
    },
    {
        nev: 'Ady Endre',
        kor: '20. század',
        szer1: 'Léda',
        szer2: 'Csinszka'
    }
]

const table = document.createElement('table')
document.body.appendChild(table)

const thead = document.createElement('thead')
table.appendChild(thead)

const t = ['Szerző neve','Korszak']

for(let a of t){
    const th = document.createElement('th')
    thead.appendChild(th)
    th.innerText=a
}

const th2 = document.createElement('th')
thead.appendChild(th2)
th2.innerText='Szerelmek'
th2.colSpan=2

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(let a of arr){
    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td1 = document.createElement('td')
    tr.appendChild(td1)
    td1.innerText=a.nev

    const td2 = document.createElement('td')
    tr.appendChild(td2)
    td2.innerText=a.kor

    const td3 = document.createElement('td')
    tr.appendChild(td3)
    td3.innerText=a.szer1

    if(a.szer2 === undefined){
        td3.colSpan = 2
    }
    else{
        const td4 = document.createElement('td')
        tr.appendChild(td4)
        td4.innerText=a.szer2
    }
}



