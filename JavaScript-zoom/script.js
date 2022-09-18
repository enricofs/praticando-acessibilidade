let zoombody = document.getElementById('zoombody')

let ZoomInicial = 1
let AdicionarZoom = 0.1

let adicionarZoom_button = document.querySelector('#adicionarZoom')

adicionarZoom_button.addEventListener('click', function(){
    if (ZoomInicial <= 2)     {
        zoombody.style.zoom = ZoomInicial + AdicionarZoom
        ZoomInicial = ZoomInicial + AdicionarZoom
    }
})

let retirarZoom_button = document.querySelector('#retirarZoom')

retirarZoom_button.addEventListener('click', () => {
  if (ZoomInicial > 0.7)     {
    zoombody.style.zoom = ZoomInicial - AdicionarZoom
    ZoomInicial = ZoomInicial - AdicionarZoom
}
})

let resetBtn = document.querySelector('#reset')

resetBtn.addEventListener("click", function () {
    ZoomInicial = 1    
    zoombody.style.zoom = ZoomInicial
})

