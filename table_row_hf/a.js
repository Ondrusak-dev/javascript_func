/**
 * @type {{war:string, team1:string, team1Size:string, team2:?, team2Size:?[]}}
 */
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]


const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const t = ["Harc megnevezése", "Szembenálló felek", "Haderő"] 

for(let a of t){
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
    td.innerText = a.war;

    const td1 = document.createElement("td")
    tr1.appendChild(td1)
    td1.innerText = a.team1;

    const td2 = document.createElement("td")
    tr1.appendChild(td2)
    td2.innerText = a.team1Size;

    if(a.team2 != undefined && a.team2Size != undefined){
        const tr1 = document.createElement("tr")
        tbody.appendChild(tr1)

        const td3 = document.createElement("td")
        tr1.appendChild(td3)
        td3.innerText = a.team2;

        const td1 = document.createElement("td")
        tr1.appendChild(td1)
        td1.innerText = a.team2Size;

        td.rowSpan = 2 
    }
}


