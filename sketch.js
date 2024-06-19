function setup() {
    createCanvas(700, 300);
  }
  
  function inicializaCores(){
    background("rgb(161,161,248)");
    fill("blue");
    textSize(64);
    textAlign(CENTER,CENTER);
  }
  
  function draw() {
    inicializaCores();
    
    let maximo = width;
    let minimo = 1;
    //mouseX, 0, width ==> 0, palavra.length
    let palavra = "TE AMO PAPAI";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    //console.log(quantidade);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,200,200);
  }