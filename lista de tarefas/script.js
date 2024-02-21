

const lista = []

function clicou(){
const item = document.getElementById("formulario").value 
const pElement = document.getElementById("formMapped")
lista.push(item)

lista.map((item)=>{

    pElement.innerHtml = item

console.log(item + 'item')

})

console.log(lista)
}


