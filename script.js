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
        window.location.href = "foguete.html";
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