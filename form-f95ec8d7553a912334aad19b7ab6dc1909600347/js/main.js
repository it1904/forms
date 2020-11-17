const tlacitko = document.getElementById('vypocetMeny')
tlacitko.addEventListener('click', function () {
    let value1 = parseFloat(document.getElementById('strA').value);
    let value2 = parseFloat(document.getElementById('strB').value);
    console.log(value1);
    console.log(value2);
    function vypocetObvodu(v1,v2) {
        return((2*(v1+v2)).toFixed(2));
    }
    console.log(obvod);
    function vypocetObsahu (v1,v2){
        return((v1*v2).toFixed(2));
    }
    vypis.innerHTML = `${slovo} obdélníků je ${vysledek} cm${nadruhou}.`;
});