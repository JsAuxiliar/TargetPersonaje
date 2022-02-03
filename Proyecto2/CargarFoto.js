var table = document.getElementById("tablero").getContext("2d");

var foto = {url: "imagenes/JuliaMaggi.png"};

foto.imagen = new Image() ;
foto.imagen.src = foto.url;
foto.imagen.addEventListener("load", cargarFoto) ;

function cargarFoto(){
  foto.cargaOK = true;
  dibujar() ;
}

function dibujar(){
  table.drawImage(foto.imagen,0,0);
}
