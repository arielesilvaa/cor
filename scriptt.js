function verificaCor() {
    let cor= document.getElementById("cor").value;
    cor = cor.toLowerCase();


    switch (cor) {
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "azul":
            document.body.style.backgroundColor = "blue";
             break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
        case "cinza":
            document.body.style.backgroundColor = "gray";
            break;
        case "preto":
            document.body.style.backgroundColor = "black";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
        case "roxo":
            document.body.style.backgroundColor = "purple";
            break;
        case "rosa":
            document.body.style.backgroundColor = "pink";
            break;
        case "laranja":
            document.body.style.backgroundColor = "orange";
            break;
        case "branco":
            document.body.style.backgroundColor = "white";
            break;
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para: "+cor+"</br>"; 

    }
}