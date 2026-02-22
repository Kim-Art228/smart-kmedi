const links = document.querySelectorAll('a'); // выбираем все ссылки на странице

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();                                     // чтобы страница не перешла мгновенно
    document.body.classList.add('fade-out');                // запускаем анимацию
   
    setTimeout(() => {
      window.location = this.href;                          // переходим на новую страницу после анимации
    }, 1000);                                               // время совпадает с длительностью анимации
  });
});