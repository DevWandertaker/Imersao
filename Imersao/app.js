function pesquisar() {
    let section = document.getElementById("resultados-pesquisa") 
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value

// se campoPesquisa for uma string sem nada :
if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
    <div class="item-resultado">
             <h2>${dado.titulo}</h2>
             <p class="descricao-meta">${dado.descricao} </p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
 `;
    }
    
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado<p>"
}

section.innerHTML = resultados
}