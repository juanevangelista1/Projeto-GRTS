// Lógica para mostrar um fomrulario para PJ e outro para PF

function toggleForm() {
  var formType = document.getElementById("formType").value;
  if (formType === "cliente") {
    document.getElementById("clienteForm").style.display = "block";
    document.getElementById("empresaForm").style.display = "none";
  } else {
    document.getElementById("clienteForm").style.display = "none";
    document.getElementById("empresaForm").style.display = "block";
  }
}

// Script para adicionar campos de endereço adicionais
var enderecoCount = 0;
document.getElementById("add-endereco").addEventListener("click", function () {
  enderecoCount++;
  var enderecoDiv = document.createElement("div");
  enderecoDiv.id = "endereco-" + enderecoCount;
  enderecoDiv.innerHTML = `
        <br>
				<h3>Endereço adicional  ${enderecoCount}</h3>
				<label for="rua-${enderecoCount}">Rua:</label><br>
				<input type="text" id="rua-${enderecoCount}"
        name="rua-${enderecoCount}"><br>
        <label for="numero-${enderecoCount}">Número:</label><br>
        <input type="text" id="numero-${enderecoCount}" name="numero-${enderecoCount}"><br>
        <label for="complemento-${enderecoCount}">Complemento:</label><br>
        <input type="text" id="complemento-${enderecoCount}" name="complemento-${enderecoCount}"><br>
        <label for="bairro-${enderecoCount}">Bairro:</label><br>
        <input type="text" id="bairro-${enderecoCount}" name="bairro-${enderecoCount}"><br>
        <label for="cidade-${enderecoCount}">Cidade:</label><br>
        <input type="text" id="cidade-${enderecoCount}" name="cidade-${enderecoCount}"><br>
        <label for="estado-${enderecoCount}">Estado:</label><br>
        <input type="text" id="estado-${enderecoCount}" name="estado-${enderecoCount}"><br>
        <label for="cep-${enderecoCount}">CEP:</label><br>
        <input type="text" id="cep-${enderecoCount}" name="cep-${enderecoCount}" minlength="8" maxlength="8"><br>
        `;
  document.getElementById("enderecos").appendChild(enderecoDiv);
});
// Script para remover campos de endereço adicionais
function removeEndereco(enderecoID) {
  document.getElementById("endereco-" + enderecoID).remove();
}

//  Lógica para exclusão do endereço:
// <button type="button" class="buttons" onclick="removeEndereco(${enderecoCount})">Remover Endereço adicionado</button>
