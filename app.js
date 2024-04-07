let numeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto){
   let paragrafo = document.querySelector(tag);
   paragrafo.innerHTML=texto;
   //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagensIniciais(){
   exibirNaTela('h1','Jogo do número secreto');
   exibirNaTela('p','Digite um número entre 1 e 10:');
}
mensagensIniciais();

function verificarChute(){
   let chute = document.querySelector('input').value;
   let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
   let mensagemAcerto = `Parabéns, voce descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
   if(chute == numeroSecreto){
      exibirNaTela('h1','Acertou!');
      exibirNaTela('p',mensagemAcerto);
      document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
      if(numeroSecreto > chute){
         exibirNaTela('p','O número secreto é maior.');
      }else{
         exibirNaTela('p','O número secreto é menor.');
      }
      tentativas++;
      limparCampo();
   }
}

function gerarNumeroAleatorio(){
   console.log(numeroSorteados);
   let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
   if(numeroSorteados.length==numeroLimite){
      numeroSorteados=[];
   }
   if(numeroSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
   }else{
      numeroSorteados.push(numeroEscolhido);
      return numeroEscolhido;
   }
}

function limparCampo(){
   chute = document.querySelector('input');
   chute.value='';
}

function reiniciar(){
   limparCampo();
   numeroSecreto = gerarNumeroAleatorio();
   tentativas = 1;
   mensagensIniciais();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}