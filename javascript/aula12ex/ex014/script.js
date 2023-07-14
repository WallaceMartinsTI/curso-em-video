function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  if (hora >= 0 && hora < 12) {
    img.src = "./imagens/manha.jpg";
    document.body.style.background = "rgb(231 220 217)";
    msg.innerHTML = `<p>Bom Dia!</p>`;
  } else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `<p>Boa Tarde!</p>`;
    img.src = "./imagens/tarde.jpg";
    document.body.style.background = "rgb(241 171 120)";
  } else {
    msg.innerHTML = `<p>Boa Noite!</p>`;
    img.src = "./imagens/noite.jpg";
    document.body.style.background = "rgb(21 40 70)";
  }
}
