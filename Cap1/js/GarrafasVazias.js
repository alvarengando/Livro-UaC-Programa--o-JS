let qtdGarrafas = 99;

while (qtdGarrafas > 0) {
  document.write(qtdGarrafas + " Garrafas de cervejas no muro! <br>");
  document.write(qtdGarrafas + " Garrafas de cervejas! <br>");
  document.write("Uma Garrafa de cerveja caiu.. <br>");

  qtdGarrafas--
  if (qtdGarrafas > 0) {
    document.write(qtdGarrafas + " Garrafas de cervejas no muro! <br>");
  } else {
    document.write(qtdGarrafas + " Garrafas de cervejas no muro! <br>");
    document.write("Sem mais Garrafas no Muro! <br>");
  }
}