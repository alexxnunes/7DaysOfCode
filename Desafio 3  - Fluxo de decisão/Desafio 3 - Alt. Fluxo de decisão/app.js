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
