// window.onload = function(){alert("Site ainda em desenvolvimento")}

//funcao menu
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



//funcao logo
function teste(){
    alert("testando JS")
}

function confirmAction(){
    let confirmAction = confirm("Game ainda em desenvolvimento, deseja continuar? ");

    if(confirmAction){
        alert("Você será redirecionado");
        window.location.href = "./foguete.html";
    } else {
      alert("Acão cancelada!");
    }
     
    
}

//funcao esterEgg
document.addEventListener("mousemove",function(e) {

    var rocket = document.querySelector(".rocket");
    rocket.style.left= e.offsetX + 'px';
    rocket.style.top= e.offsetY + 'px';


});


window.onload = draw;

function draw(){
	var canvas = document.getElementById("stars");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  sky.paint(canvas);
}

var sky = {
  quantStars:80,
  canvas:null,
  ctx:null,
  paint:function(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    
    this.drawSky();
    
    this.populateSky();
  },
  drawSky:function(){
    this.ctx.fillStyle = "#0c1644";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  },
  populateSky:function(){
    for(var i=0; i < this.quantStars; i++){
      this.drawStar(Math.random()*this.canvas.width,
                    Math.random()*this.canvas.height);
    }
  },
  drawStar:function(posX, posY){
    this.ctx.save();
    this.ctx.translate(posX, posY);
    var escala = Math.random()*1.5;
    this.ctx.scale(escala, escala);
    var raioMax = 20;
    var raioMin = 8;
    this.ctx.beginPath();
    this.ctx.rotate(Math.random());
    this.ctx.moveTo(raioMax, 0);
    for(var i = 0; i < 10; i++){
      this.ctx.rotate(Math.PI/5)
      if(i%2 == 0){
        this.ctx.lineTo(raioMin, 0)
      }else{
        this.ctx.lineTo(raioMax, 0)
      }
    }
    this.ctx.closePath();
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.restore();
  }
}