
const botoesNumericos = document.querySelectorAll('.numerico');
const botoesOperacoes = document.querySelectorAll('.operacao');

console.log(botoesNumericos)
let jaTemOperador = false;
let exibiuResultado = false

const visor = document.getElementById('visor');
function adicionarEventoDeClique (elemento, funcao) {
    elemento.onclick = funcao
  }

  function ClicarNoNumero () {
    const numeroClicado = this.textContent
    const valorNoVisor = visor.textContent
    if(exibiuResultado){
        visor.textContent = numeroClicado
        exibiuResultado = false
        return
    }
    novoValor = valorNoVisor + numeroClicado
    visor.textContent = novoValor
  }
  function ClicarNaOperacao () {
    const operacaoClicado = this.value
    const valorNoVisor = visor.textContent
   
    if(operacaoClicado === "="){
        resultado()
        return
    }
    
    if(operacaoClicado === "CE"){
        visor.textContent = ""
        return
    }

    
    novoValor = valorNoVisor + operacaoClicado
    visor.textContent = novoValor

  }

  function resultado(){
    const resultado = eval(visor.textContent)
    console.log(resultado)
    visor.textContent =  resultado
    exibiuResultado = true
    jaTemOperador = false // zera a variavel para recomeçar
  }
  
  botoesOperacoes.forEach(elemento =>
    adicionarEventoDeClique(elemento, ClicarNaOperacao)
  ) 
  botoesNumericos.forEach(elemento =>
    adicionarEventoDeClique(elemento, ClicarNoNumero)
  )
