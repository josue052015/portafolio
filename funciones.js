window.addEventListener('scroll',function(){
    let animacion = document.getElementById('animado');
    let posicion = animacion.getBoundingClientRect().top
    console.log(posicion);
    let tamañopantalla = window.innerHeight/1.3;
    if(posicion < tamañopantalla){
        animacion.style.animation = 'mover 1s ease-out'
        animacion.style.opacity = 100
    }
    
    let tamañopantalla2 = window.innerHeight - 75;
    if(posicion > tamañopantalla2){
        animacion.style.animation = null
        animacion.style.opacity = 0
    }
    
})