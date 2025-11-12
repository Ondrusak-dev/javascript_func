const szam = 6;
const opsum = valami4(4)

valami1()
/**
 * kiírja hogy szeva
 * @returns {void}
 */
function valami1(){
    console.log("szeva")
}

valami2()
/**
 * kiírja a szam-változót
 * @returns {void}
 */
function valami2(){
    console.log(szam)
}

valami3()
/**
 * lokális változó
 * @returns {void}
 */
function valami3(){
    const d = 9;
    console.log(d)
}


/**
 * lokális változó
 * @param {number} param1 - eza bemeneti paraméter
 * @returns {number}
 */
function valami4(param1){
    const szam2 = 6;
    const c = szam2+param1;
    return c
}
console.log(opsum)

