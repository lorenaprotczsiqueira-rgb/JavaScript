const curiosidades = [
  "🌆 Istambul é a única cidade do mundo localizada em dois continentes.",
  "🏙️ Brasília foi construída em apenas 41 meses.",
  "🌉 São Francisco possui uma das pontes mais famosas do mundo: a Golden Gate Bridge.",
  "🏰 Roma tem mais de 2.000 anos de história documentada.",
  "🌃 Dubai abriga o edifício mais alto do planeta: o Burj Khalifa."
];

const btn = document.getElementById("btn");
const div = document.getElementById("curiosidade");

btn.addEventListener("click", () => {
  const sorteio = Math.floor(Math.random() * curiosidades.length);
  div.textContent = curiosidades[sorteio];
});
