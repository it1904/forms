const tlacitko = document.getElementById('vyp')
tlacitko.addEventListener('click', function () {
    let value1 = parseFloat(document.getElementById('strA').value);
    let value2 = parseFloat(document.getElementById('strB').value);
    console.log(value1);
    console.log(value2);
    function vypocetObvodu(v1,v2) {
        return((2*(v1+v2)).toFixed(2));
    }
    function vypocetObsahu (v1,v2){
        return((v1*v2).toFixed(2));
    }
    let vysledek;
    let option = parseFloat(document.getElementById('opt').value);
    let slovo;
    let nadruhou
    if(option == 1){
        vysledek = vypocetObvodu(value1,value2);
        slovo = "Obvod";
        nadruhou = ""
    }
    else if(option == 2){
        vysledek = vypocetObsahu(value1,value2);
        slovo = "Obsah";
        nadruhou = "²"
    }
    let vypis = document.getElementById('vypis');
    vypis.innerHTML = `${slovo} obdélníku je ${vysledek} cm${nadruhou}.`;
});