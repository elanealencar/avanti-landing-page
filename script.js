//Função para realizar a busca (lupa)

const inputBusca = document.getElementById("input-buscar");
const botaoBusca = document.getElementById("botao-buscar");
const resultadoBusca = document.getElementById("resultado");

function realizarBusca() {
    const termo = inputBusca.value.trim();
  
    if (termo !== "") {
      resultadoBusca.textContent = `Você buscou por: '${termo}'`;
    } else {
      resultadoBusca.textContent = "";
    }
  }
  
  botaoBusca.addEventListener("click", realizarBusca);
  
  inputBusca.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      realizarBusca();
    }
  });

  //Função parao o carrossel
  document.querySelectorAll('.carrossel-lancamento').forEach(wrapper => {
    const carrossel = wrapper.querySelector('.carrossel');
    const btnEsquerda = wrapper.querySelector('.seta-esquerda');
    const btnDireita = wrapper.querySelector('.seta-direita');
  
    const scrollAmount = 250;
  
    btnDireita.addEventListener('click', () => {
      carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  
    btnEsquerda.addEventListener('click', () => {
      carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  });
  