- Código adaptado para que as escolhas sejam feitas através de seleções (select) no HTML, mantendo apenas o prompt para inserir tecnologias extras

  
// Atualiza as opções da tecnologia inicial conforme a área document.getElementById("area").addEventListener("change", function() { let area = this.value; let tecnologiaInicial = document.getElementById("tecnologiaInicial"); tecnologiaInicial.innerHTML = ""; // limpa as opções anteriores

if (area === "front-end") { tecnologiaInicial.innerHTML = <option value="">-- Selecione --</option> <option value="React">React</option> <option value="Vue">Vue</option>; } else if (area === "back-end") { tecnologiaInicial.innerHTML = <option value="">-- Selecione --</option> <option value="C#">C#</option> <option value="Java">Java</option>; } else { tecnologiaInicial.innerHTML = <option value="">-- Selecione a área primeiro --</option>; } });

function finalizar() { let area = document.getElementById("area").value; let tecnologiaInicial = document.getElementById("tecnologiaInicial").value; let caminho = document.getElementById("caminho").value; let resultado = document.getElementById("resultado");

if (!area || !tecnologiaInicial || !caminho) { alert("Por favor, preencha todas as opções."); return; }

// Mensagem do caminho escolhido if (caminho === "especializando") { alert(Muito bem! Você escolheu ${area} com ${tecnologiaInicial} e quer se especializar.); } else if (caminho === "fullstack") { alert(Excelente! Você escolheu ${area} com ${tecnologiaInicial} e quer virar Fullstack.); }

// 4. Parte de tecnologias extras (usando prompt) let tecnologias = []; let tecnologia = prompt("Qual outra tecnologia você gostaria de aprender?"); if (tecnologia) { tecnologias.push(tecnologia); }

let mais = confirm("Tem mais alguma tecnologia que você gostaria de aprender?"); while (mais) { tecnologia = prompt("Digite outra tecnologia:"); if (tecnologia) { tecnologias.push(tecnologia); } mais = confirm("Quer adicionar mais alguma tecnologia?"); }

// Exibir resumo final na tela resultado.textContent = Você escolheu: área ${area}, começou com ${tecnologiaInicial},  decidiu seguir ${caminho}, e quer aprender também: ${tecnologias.join(", ") || "nenhuma tecnologia extra"}.; }
