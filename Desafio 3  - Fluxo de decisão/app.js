let seguir = prompt("Qual área quer seguir front-end ou back-end?");

if (seguir == "front-end") {
  prompt("Prefere aprender React ou Vue?");
} else {
  prompt("Prefere aprender C# ou Java?");
}
  
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
