


document.querySelector(".list-group-item").style.display = "none";  //dar display none para o elemento base.

function clicou(){


var formulario = document.getElementById("formulario");


if(formulario.value !== "" && formulario.value !== null){

const date = new Date();
var divClone = document.querySelector(".list-group-item").cloneNode(true);  


const item = formulario.value
divClone.appendChild(document.createTextNode(`Data: ${new Date().toLocaleDateString()} | Tarefa:           `))
divClone.appendChild(document.createTextNode(item));
divClone.style.display = "flex";
  
document.querySelector('.list-group').appendChild(divClone);

}

else{
    alert("NAO È POSSIVEL COLOCAR VALOR VAZIO")
}
}

function clicouRemover() {
    const todosItens = document.querySelectorAll(".list-group-item");
    todosItens.forEach((item) => {
        const checkbox = item.querySelector(".form-check-input");
        if (checkbox.checked) {
            // Remova o elemento da lista
            item.remove();
        }
    });
}

