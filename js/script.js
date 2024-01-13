const buttons = document.querySelectorAll('.imagePicker li');
const image = document.querySelector('#imgIphone');

buttons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    buttons.forEach((btn) => {
      // removendo a class selected do botao
      btn.querySelector('.color').classList.remove('selected');
    });

    const button = event.target; // coletando cada botao
    const id = button.getAttribute('id'); // pegar id de cada botao
    button.querySelector('.color').classList.add('selected'); // adicionando a class selected para entao marcar cada botao como selecionado

    image.classList.add('changing'); // adcionando classs
    image.setAttribute('src', `img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle('changing');
    }, 200);
  });
});
