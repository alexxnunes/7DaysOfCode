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
