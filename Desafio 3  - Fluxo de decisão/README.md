Desafio 3 - Fluxo de decisão

- Codigo abaixo feito por mim, contém bastante erro até por estar em aprendizado.
  
let seguir = prompt("Você quer seguir para a área de Front-End ou para a área de Back-End?");

if (seguir == "front-end") {
  prompt("Você quer aprender React ou aprender Vue?");
} else {
  prompt("Você quer aprender C# ou aprender Java?");
}
  
let escolha = prompt("Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?");

let tecnologias = [];

let tecnologia = prompt("Qual tecnologia você gostaria de aprender?");
if (tecnologia) {
  tecnologias.push(tecnologia);
  alert("Legal! " + tecnologia + " é uma ótima escolha.");
}

let mais = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");

while (mais) {
  tecnologia = prompt("Digite mais uma tecnologia:");
  
  if (tecnologia) {
    tecnologias.push(tecnologia);
    alert("Interessante! " + tecnologia + " pode abrir várias portas.");
  }

  mais = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
}

alert("Você escolheu as seguintes tecnologias: " + tecnologias.join(", "));


- Código abaixo corrigido e aprimorado com a ajuda de IA.

// 1. Escolher a área
let area = prompt("Você quer seguir para a área de Front-End ou para a área de Back-End?");

if (area && area.toLowerCase() === "front-end") {
  // 2. Escolha dentro de Front-End
  let framework = prompt("Você quer aprender React ou aprender Vue?");
  alert(`Boa escolha! Você escolheu aprender ${framework}.`);

} else if (area && area.toLowerCase() === "back-end") {
  // 2. Escolha dentro de Back-End
  let linguagem = prompt("Você quer aprender C# ou aprender Java?");
  alert(`Ótimo! Você escolheu aprender ${linguagem}.`);

} else {
  alert("Opção inválida. Vamos continuar assim mesmo!");
}

// 3. Especializar ou Fullstack
let caminho = prompt("Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?");

if (caminho && caminho.toLowerCase() === "especializando") {
  alert("Muito bem! Focar em se especializar pode te tornar referência na área.");
} else if (caminho && caminho.toLowerCase() === "fullstack") {
  alert("Excelente! Ser Fullstack abre muitas oportunidades no mercado.");
} else {
  alert("Opção inválida, mas o importante é continuar aprendendo!");
}

// 4. Tecnologias extras
let tecnologias = [];
let tecnologia = prompt("Qual tecnologia você gostaria de aprender?");

if (tecnologia) {
  tecnologias.push(tecnologia);
}

let mais = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
while (mais) {
  tecnologia = prompt("Digite outra tecnologia:");
  if (tecnologia) {
    tecnologias.push(tecnologia);
  }
  mais = confirm("Quer adicionar mais alguma tecnologia?");
}

// Resultado final
if (tecnologias.length > 0) {
  alert("Você escolheu as seguintes tecnologias: " + tecnologias.join(", "));
} else {
  alert("Você não informou nenhuma tecnologia extra.");
}

- Código adaptado para que as escolhas sejam feitas através de seleções (select) no HTML, mantendo apenas o prompt para inserir tecnologias extras
- 
// Atualiza as opções da tecnologia inicial conforme a área
document.getElementById("area").addEventListener("change", function() {
  let area = this.value;
  let tecnologiaInicial = document.getElementById("tecnologiaInicial");
  tecnologiaInicial.innerHTML = ""; // limpa as opções anteriores

  if (area === "front-end") {
    tecnologiaInicial.innerHTML = `
      <option value="">-- Selecione --</option>
      <option value="React">React</option>
      <option value="Vue">Vue</option>
    `;
  } else if (area === "back-end") {
    tecnologiaInicial.innerHTML = `
      <option value="">-- Selecione --</option>
      <option value="C#">C#</option>
      <option value="Java">Java</option>
    `;
  } else {
    tecnologiaInicial.innerHTML = `<option value="">-- Selecione a área primeiro --</option>`;
  }
});

function finalizar() {
  let area = document.getElementById("area").value;
  let tecnologiaInicial = document.getElementById("tecnologiaInicial").value;
  let caminho = document.getElementById("caminho").value;
  let resultado = document.getElementById("resultado");

  if (!area || !tecnologiaInicial || !caminho) {
    alert("Por favor, preencha todas as opções.");
    return;
  }

  // Mensagem do caminho escolhido
  if (caminho === "especializando") {
    alert(`Muito bem! Você escolheu ${area} com ${tecnologiaInicial} e quer se especializar.`);
  } else if (caminho === "fullstack") {
    alert(`Excelente! Você escolheu ${area} com ${tecnologiaInicial} e quer virar Fullstack.`);
  }

  // 4. Parte de tecnologias extras (usando prompt)
  let tecnologias = [];
  let tecnologia = prompt("Qual outra tecnologia você gostaria de aprender?");
  if (tecnologia) {
    tecnologias.push(tecnologia);
  }

  let mais = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
  while (mais) {
    tecnologia = prompt("Digite outra tecnologia:");
    if (tecnologia) {
      tecnologias.push(tecnologia);
    }
    mais = confirm("Quer adicionar mais alguma tecnologia?");
  }

  // Exibir resumo final na tela
  resultado.textContent = `Você escolheu: área ${area}, começou com ${tecnologiaInicial}, 
  decidiu seguir ${caminho}, e quer aprender também: ${tecnologias.join(", ") || "nenhuma tecnologia extra"}.`;
}

