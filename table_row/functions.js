/**
 * @typedef {{nemzetiseg:string, szerzo:string, mu1:string, szerzo2?:string, mu2?:string}} CountryWriters
 */

/**
 * @param {{CountryWriters}[]} data 
 */
function renderTableBodyHF(data) {
    const tablebody = document.getElementById('tbody_hf');
    tablebody.innerHTML = '';

    for (const  elem of data) {
        renderTableRow(tablebody, elem)
    }
}



/**
 * 
 * @param {string} form 
 * @param {string} id 
 * @param {string} labelcontent 
 */
function createFormElement(form, id, labelcontent){
    const label = document.createElement('label')
    label.htmlFor = id;
    label.innerText = labelcontent;

    const input = document.createElement('input')
    input.id = id;

    form.appendChild(label)
    form.appendChild(input)
}


/**
 * @param {HTMLTableSectionElement} tablebody 
 * @param {CountryWriters} CountryWriters 
 */

function renderTableRow(tablebody, CountryWriters){
    const tr = document.createElement('tr');
        tablebody.appendChild(tr);

        const td1 = createCell('td', CountryWriters.nemzetiseg, tr)

        td1.addEventListener('click', function(e) {
            const cell = e.target;
            const body = cell.parentElement.parentElement;
            const prev = body.querySelector('.marked');
            if (prev) prev.classList.remove('marked');
            cell.classList.add('marked');
        });

        createCell('td', CountryWriters.szerzo, tr)
        createCell('td', CountryWriters.mu1, tr)

        if (CountryWriters.szerzo2 && CountryWriters.mu2) {
            const tr2 = document.createElement('tr');
            tablebody.appendChild(tr2)
            createCell('td', CountryWriters.szerzo2, tr2)
            createCell('td', CountryWriters.mu2, tr2)

            td1.rowSpan = 2;
        }
}


/**
 * 
 * @param {string} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableCellElement} parentRow 
 * @returns 
 */
function createCell(celltype, cellcontent, parentRow){
    const cell = document.createElement(celltype)
    cell.innerText = cellcontent;
    parentRow.appendChild(cell)

    return cell;
}



function generateHeader(table, headerlist){
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr1 = document.createElement('tr');
    thead.appendChild(tr1);

    for(let a of headerlist) {
        const th = document.createElement('th');
        tr1.appendChild(th);
        th.innerText = a;
    }
}


/**
 * @param {Event} e 
 */
function htmlformEventlistener(e){
    e.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    const b = e.target;
    
    /**
     * @type {HTMLInputElemet}
     */
       const nemzetiseg1 = b.querySelector('#nemzetiseg')
       /**
     * @type {HTMLInputElemet}
     */
       const szerzo1 = b.querySelector('#szerzo1')
       /**
     * @type {HTMLInputElemet}
     */
       const mu11 = b.querySelector('#mu1')
       /**
     * @type {HTMLInputElemet}
     */
       const szerzo22 = b.querySelector('#szerzo2')
       /**
     * @type {HTMLInputElemet}
     */
       const mu22 = b.querySelector('#mu2')

        /**
         * @type {string}
         */
        const nemzet = nemzetiseg1.value
        /**
         * @type {string}
         */
        const szerez = szerzo1.value
        /**
         * @type {string}
         */
        const muu = mu11.value
        /**
         * @type {string}
         */
        const szerez2 = szerzo22.value
        /**
         * @type {string}
         */
        const muu2 = mu22.value

        /**
        * @type {{CountryWriters}}
        */
        const a = {
             
        }
        a.nemzetiseg = nemzet
        a.szerzo = szerez
        a.mu1 = muu
        a.szerzo2 = szerez2
        a.mu2 = muu2

        const tbody = document.getElementById('tbody')

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

        if (a.mu2 && a.szerzo2) {
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
