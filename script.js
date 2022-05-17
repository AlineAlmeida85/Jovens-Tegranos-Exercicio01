
function calcular() {
    console.log("Recebendo os Valores")
    let largura = document.getElementById('inputLargura').value;
    let comprimento = document.getElementById('inputComprimento').value;
    let valor = document.getElementById('inputValorM2').value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});    
    
    let resultadoArea = document.getElementById('areaTerreno').value;
    let resultadoPreco = document.getElementById('precoTerreno').value;

    let calculoTamanho = largura * comprimento;
    let calculoValor = valor * calculoTamanho;   
    
    valorLargura.innerHTML = largura;
    valorComprimento.innerHTML = comprimento;
    valorMetro.innerHTML = valor;

    areaTerreno.innerHTML = calculoTamanho.toFixed(2);    
    precoTerreno.innerHTML = calculoValor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}
    


    
    
    

   
   





   

 
    





