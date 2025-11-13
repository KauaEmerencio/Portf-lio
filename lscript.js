



function enviarWhats(event){
event.preventDefault();

const nome= document.getElementbyId('nome').value;
const email =document.getElementById('email').value;
const mensagem = document.getElementById('mensagem');
let telefone = '5579998107310'

const texto = `Olá, meu nome é ${nome}, meu email é ${email}, estou entrando em contato atraves do seu portfolio e gostaria ${mensagem}`
const msgFormatada = encodeURIComponent(texto);
const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
console.log(url);
window.open(url, '_blank');

}