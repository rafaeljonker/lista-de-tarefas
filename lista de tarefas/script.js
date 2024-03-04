


function clicou(){
const item = document.getElementById("formulario").value 
const pElement = document.getElementById("formMapped")
const p = document.createElement('p')
p.appendChild(document.createTextNode(item));
document.getElementById('mylist').appendChild(p)


}


document.getElementById('mylist').addEventListener('onclick', function(event) {
    if (event.target.tagName === 'P') {
        event.target.classList.add('display-none');
    }
});
