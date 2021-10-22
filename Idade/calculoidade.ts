function calculoIdade(){
    let anoN = document.getElementById('anoNasc');
    let anoA = new Date();
    let anoCalc = anoA.getFullYear();
    let resultado = document.getElementById('idade');
    let an = Number(anoN.value);
    if(anoN.value.length=='0'){
        window.alert('[ERRO] Falta de valores.')
    }else if(anoCalc-an<18){
        resultado.innerHTML=`<h2>Sua idade é <strong>${anoCalc-an} anos</strong> e você é menor de idade.</h2>`
    }else{
        resultado.innerHTML=`<h2>Sua idade é <strong>${anoCalc-an} anos</strong> e você é maior de idade.</h2>`
    }
}