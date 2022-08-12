
function validarMoradores(idNomeMorador, idBloco, idPav, idApto) {
    let nome = document.getElementById(idNomeMorador).value
    let bloco = document.getElementById(idBloco).value
    let pav = document.getElementById(idPav).value
    let apto = document.getElementById(idApto).value

    if (nome == "")
        alert("Nome do morador não pode estar em branco. Favor preenchê-lo!");
    else if (bloco == "selecionar") 
        alert("Bloco não pode estar em branco. Favor preenchê-lo!");
    else if (pav == "selecionar")
        alert("Pavimento não pode estar em branco. Favor preenchê-lo!");
    else if (apto == "selecionar")
        alert("Apartamento não pode estar em branco. Favor preenchê-lo!");
    else cadastrarMoradores(nome, bloco, parseInt(pav), parseInt(apto));
}

function cadastrarMoradores(nome, bloco, pav, apto) {
    let novoMorador = {nome:nome, bloco:bloco, pavimento: pav, apartamento:apto};

    if (typeof(Storage) !== "undefined") {
        let moradores = localStorage.getItem("moradores");
        if (moradores == null) moradores = []; // Nenhum produto ainda foi cadastrado
        else moradores = JSON.parse(moradores);
        moradores.push(novoMorador); // Adiciona um novo produto
        localStorage.setItem("moradores",JSON.stringify(moradores))
        alert(`Morador: ${nome} do bloco ${bloco}
    ${pav}º pavimento no apartamento ${apto} 
    Cadastrado com sucesso!`);
        atualizarTotalMoradores("totalMoradores");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function atualizarTotalMoradores(idCampo) {
    localStorage.setItem("totalMoradores",++document.getElementById(idCampo).innerHTML)
}

function carregarTotalMoradores(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalMoradores = localStorage.getItem("totalMoradores");
        if (totalMoradores == null) totalMoradores = 0;
        document.getElementById(idCampo).innerHTML = totalMoradores;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function listarMoradores() {
    if (typeof(Storage) !== "undefined") {
        let moradores = localStorage.getItem("moradores");
        document.write("<h1>Moradores:</h1>")
        document.write("<div><input type='button' onclick='alterarMorador()' value='Alterar' class='alinhaBtns'><input type='button' onclick='excluirMorador()' value='Excluir' class='alinhaBtns'></div>");
        if (moradores == null)
            document.write("<h3>Ainda não há nenhum morador cadastrado</h3>");
        else {
            moradores = JSON.parse(moradores);
            moradores.forEach(morador => {
                document.write("<p>");
                document.write("<div>Nome do morador: "+morador.nome+"</div>");
                document.write("<div>Bloco: "+morador.bloco+"</div>");
                document.write("<div>Pavimento: "+morador.pavimento+"</div>");
                document.write("<div>Apartameto: "+morador.apartamento+"</div>");
                document.write("</p>");
                document.write("<hr>");
                
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}

function excluirMorador (){
    alert("Morador excluido com sucesso!")
}

function alterarMorador(){
    alert("Morador editado com sucesso!")
}