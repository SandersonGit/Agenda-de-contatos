const form = document.getElementById("form");
const nome = []
const telefone = []
let linhas = "";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  addLinha()
  atualizaTabela()

});

function addLinha() {
  
    const nameInput = document.getElementById("name");
    const telInput = document.getElementById("tel");

  if (nome.includes(nameInput.value)) {
    alert(`O nome: ${nameInput.value} Já está cadastrado`)
  } else {
    
    nome.push(nameInput.value);
    telefone.push(parseFloat(telInput.value));
  
    let linha = `<tr>`;
    linha += `<td>${nameInput.value}</td>`;
    linha += `<td>${telInput.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
}
nameInput.value = "";
telInput.value = "";    
}
   
function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
  
    corpoTabela.innerHTML = linhas;
  }
  

