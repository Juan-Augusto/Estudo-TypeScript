function aptoOuNao(){
    let anoN = document.getElementById('anoNasc');
    let resultado = document.getElementById('aptidao');
    let anoRef = new Date();
    let anoR = anoRef.getFullYear();
    let aA = Number(anoN.value)
    if(anoN.value.length == '0'){
        window.alert('[ERRO] Falta de valores.')
    }else if(anoR-aA<18){
        resultado.innerHTML = `<h2>Sua idade em ${anoR} será de ${anoR-aA} anos e você <strong>não estará apto</strong> para adquirir a CNH.</h2>`
    }else{
        resultado.innerHTML = `<h2>Sua idade em ${anoR} será de ${anoR-aA} anos e você <strong>estará apto</strong> para adquirir a CNH.</h2>`
    }


}