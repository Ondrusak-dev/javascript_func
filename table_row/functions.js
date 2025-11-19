/**
 * @typedef {{nemzetiseg:string, szerzo:string, mu1:string, szerzo2?:string, mu2?:string}} CountryWriters
 */
/**
 * @typedef {{id:string, label:string}} FormField
 */

/**
 * @param {{nemzetiseg:string, szerzo:string, mu1:string, szerzo2?:string, mu2?:string}[]} tomb 
 */
function renderTableBody(tomb) {
    const tbodyLocal = document.getElementById('tablebody');
    tbodyLocal.innerHTML = "";

    for (let a of tomb) {
        renderTableRow(tbodyLocal, a);
    }
}


/**
 * @param {string} form 
 * @param {string} id 
 * @param {string} labelContent 
 */
function createFormElement(form, id, labelContent) {
    const br1 = document.createElement('br');
    const br2 = document.createElement('br');
    const br3 = document.createElement('br');

    const div = document.createElement('div');
    form.appendChild(div);

    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelContent;

    const input = document.createElement('input');
    input.id = id;

    const span = document.createElement('span');
    span.classList.add("error");

    div.appendChild(label);
    div.appendChild(br1);
    div.appendChild(input);
    div.appendChild(span);
    div.appendChild(br2);
    div.appendChild(br3);
}


/**
 * @param {HTMLTableSectionElement} tableBody 
 * @param {CountryWriters} CountryWriters 
 */

function renderTableRow(tableBody, CountryWriters) {
    const tr2 = document.createElement('tr');
    tableBody.appendChild(tr2);

    const td1 = createCell('td', CountryWriters.nemzetiseg, tr2);
    
    td1.addEventListener('click', function(e){
        /**
         * @type {HTMLTableCellElement}
         */
        const a = e.target;

        const row = a.parentElement;
        const tbody = row.parentElement;

        const alreadyMarked = tbody.querySelector('.marked');

        if (alreadyMarked !== null) {
            alreadyMarked.classList.remove('marked'); 
        }

        a.classList.add("marked");
    });

    const td2 = createCell('td', CountryWriters.szerzo, tr2);

    const td3 = createCell('td', CountryWriters.mu1, tr2);

    if (CountryWriters.mu2 != undefined && CountryWriters.szerzo2 != undefined) {
        const tr3 = document.createElement('tr');
        tableBody.appendChild(tr3);

        const td4 = createCell('td', CountryWriters.szerzo2, tr3);

        const td5 = createCell('td', CountryWriters.mu2, tr3);

        td1.rowSpan = 2;
    }
}

/**
 * @param {'td' | 'th'} cellType 
 * @param {string} cellContent 
 * @param {HTMLTableRowElement} parentRow 
 * @returns {HTMLTableCellElement}
 */
function createCell(cellType, cellContent, parentRow) {
    const cell = document.createElement(cellType);
    cell.innerText = cellContent;
    parentRow.appendChild(cell);

    return cell;
}


/**
 * @param {HTMLTableElement} table 
 * @param {string[]} headerList 
 */
function generateHeader(table, headerList) {
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tableRow = document.createElement('tr');
    thead.appendChild(tableRow);

    for (const x of headerList) {
        const th = document.createElement('th');
        tableRow.appendChild(th);
        th.innerText = x;
    }
}


/**
 * @param {Event} e 
 */
function HTMLFormEventListener(e){
    e.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    const b = e.target;

    /**
     * @type {HTMLInputElement}
     */
    const nemzetiseg = b.querySelector('#nemzetiseg');

    /**
     * @type {HTMLInputElement}
     */
    const szerzo = b.querySelector('#szerzo');

    /**
     * @type {HTMLInputElement}
     */
    const mu1 = b.querySelector('#mu1');

    /**
     * @type {HTMLInputElement}
     */
    const szerzo2 = b.querySelector('#szerzo2');

    /**
     * @type {HTMLInputElement}
     */
    const mu2 = b.querySelector('#mu2');

    /**
     * @type {string}
     */
    const natValue = nemzetiseg.value;

    /**
     * @type {string}
     */
    const authValue = szerzo.value;

    /**
     * @type {string}
     */
    const mu1Value = mu1.value;

    /**
     * @type {string}
     */
    const auth2Value = szerzo2.value;

    /**
     * @type {string}
     */
    const mu2Value = mu2.value;

    /**
     * @type {CountryWriters}
     */
    const bah = {
        
    }
    if (!validateFields(nemzetiseg, szerzo, mu1)){
        return;
    }

    bah.nemzetiseg = natValue;
    bah.szerzo = authValue;
    bah.mu1 = mu1Value;

    if (auth2Value && mu2Value){
        bah.szerzo2 = auth2Value;
        bah.mu2 = mu2Value;
    }
    
    const tbody = document.getElementById('tablebody');
    renderTableRow(tbody, bah);
}


/**
 * @param {HTMLInputElement} inputfield1 
 * @param {HTMLInputElement} inputfield2 
 * @param {HTMLInputElement} inputfield3 
 * @returns {boolean}
 */
function validateFields(inputfield1, inputfield2, inputfield3) {
    const form = inputfield1.form;

    const errors = form.querySelectorAll(".error");
    
    for (const hiba of errors) {
        hiba.innerText = "";
    }

    let valid = true;

    if (inputfield1.value == ""){
        const parentDiv = inputfield1.parentElement;
        const r = parentDiv.querySelector(".error");
        r.innerText = "Mező kitöltése kötelező!"

        valid = false;
    }

    if (validateField(inputfield2, "Mező kitöltése kötelező!") == false) {
        valid = false
    }

    if (validateField(inputfield3, "Mező kitöltése kötelező!") == false) {
        valid = false
    }

    return valid;
}


/**
 * @param {string[]} headerList 
 * @param {string} tbodyId 
 */
function generateTable(headerList, tbodyId) {
    const table = document.createElement('table');
    document.body.appendChild(table);

    generateHeader(table, headerList);

    const tbody = document.createElement('tbody');
    tbody.id = tbodyId;
    table.appendChild(tbody);
}


/**
 * @param {HTMLInputElement} htmlInputField 
 * @param {string} errorMessage 
 * @returns {boolean}
 */
function validateField(htmlInputField, errorMessage) {
    valid = true;

    if (htmlInputField.value == ""){
        const div = htmlInputField.parentElement;
        const message = div.querySelector('.error');
        message.innerText = errorMessage;
        valid = false;
    }

    return valid;
}
