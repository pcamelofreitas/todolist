var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


//saber validar o tamanho
function inputLength() {
    return input.value.length;
}
//criar o elemento
function creatListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    li.onclick = function(){
        li.classList.toggle('done')
    } 
    //Fazer botão de excluir   
    let x = document.createElement("button");
    x.innerHTML = "x";
    x.type = "x";
    x.name = "xcl" ;
    
    //função ao clicar no botao de excluir
    x.onclick = function () {
       li.remove();
    }
    li.appendChild(x);
}
//criar apos clickar
function addListAfterClick() {
    if (inputLength() > 0) {
        creatListElement();
    }
}
// criar apos enter
function addListAfterKeydown(event){
    if (inputLength() > 0 && event.code === 'Enter') {
        creatListElement();
    }
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);

// button.removeEventListener("click", excListAfterClick)
