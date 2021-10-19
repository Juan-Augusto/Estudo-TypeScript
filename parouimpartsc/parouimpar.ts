function parOuImpar(){
    let valor = document.getElementById('numcheck');
    let resultado = document.getElementById('check')

    if(valor.value.length=='0'){
        window.alert('[ERRO]')
    }else if(valor.value%2==0){
        resultado.innerHTML=`<h3>O número ${valor.value} é par.</h3>`
    }else{
        resultado.innerHTML=`<h3>O número ${valor.value} é ímpar.</h3>`
    }
}
