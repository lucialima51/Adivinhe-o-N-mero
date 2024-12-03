const button = document.getElementById("button");
const resposta = document.getElementById("resposta");
const image = document.querySelector("img");
const tempo = document.getElementById("tempo");

const numeroAleatorio = Math.floor(Math.random() *11);

let timer = 0;

setInterval(() => {
    tempo.innerText = timer;
    timer++;
},1000);


const verifica = () => {

resposta.innerText = "processando...";
image.src = "./images/processando.gif";

    const numeroDigitado = document.querySelector("input").value;

    setTimeout(() => {
        if (Number(numeroDigitado) === numeroAleatorio) {
       
            resposta.innerText = "Acertou o numero!!"
            resposta.style.color = "green"
            image.src = "./images/acertou.gif"

            alert(`seu tempo foi de ${timer}segundos`)

            setTimeout(() => {
             window.location.reload();  
            }, 5000);


        } else {
            
            if ( (numeroDigitado < numeroAleatorio) && (numeroDigitado >= 0) ) {
               
                resposta.innerText = "Digite um numero maior";
                resposta.style.color = "goldenrod"
                image.scr = "./images/mais.gif"
    
            } else if((numeroDigitado > numeroAleatorio) && (numeroDigitado < 11)){
                resposta.innerText = ("Digite um numero menor"); 
                resposta.style.color = "purple"
                image.scr = "./images/menos.gif"
    
            }else{
                resposta.innerText = ("Numero de 0 a 10!!!");
                resposta.style.color = "crismson"
                image.scr = "./images/burro.avif"
            }
        }
    
    },1000  );

};

button.addEventListener("click", verifica);