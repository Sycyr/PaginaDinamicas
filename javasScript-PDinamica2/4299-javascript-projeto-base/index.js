const inputItem = document.getElementById("input-item");
const listaCompras = document.getElementById("lista-de-compras")
const botaoAdicionarItem = document.getElementById("adicionar-item");
let contador = 0;


botaoAdicionarItem.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log(inputItem.value);

    if (inputItem.value === ""){
        alert("Item vazio não é permitido.")
        return
    }

    const itemLista = document.createElement("li");
    const containerLista = document.createElement("div");
    containerLista.classList.add("lista-item-container");
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox" + contador ++;
    const nomeItem = document.createElement("p");
    nomeItem.innerHTML = inputItem.value;

    containerLista.appendChild(inputCheckBox);
    containerLista.appendChild(nomeItem);

    itemLista.appendChild(containerLista);
    listaCompras.appendChild(itemLista);

    const diaDaSemana = new Date().toLocaleDateString(
        "pt-BR", 
        {weekday: "long"
        });

    const data = new Date().toLocaleDateString("pt-BR",);

    const dataCompleta = `${diaDaSemana} (${data})`;

    console.log(dataCompleta);
});
