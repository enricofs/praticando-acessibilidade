function mudarFontSize(String) {
  let ids = ['#titulo', '#texto']

  let titulo = document.querySelector('#titulo')
  let texto = document.querySelector('#texto')

  ids.forEach(id => {
    
    let elementos = document.querySelector(id)

    let fontSize = window.getComputedStyle(elementos, null).getPropertyValue('font-size')

    fontSize = parseFloat(fontSize)

    if (String === 'aumentar') {
      elementos.style.fontSize = fontSize + 5 + 'px'
    } else if (String === 'diminuir') {
      elementos.style.fontSize = fontSize - 5 + 'px'
    } else {
      //document.location.reload(true)
      titulo.style.fontSize = 35 + 'px'
      texto.style.fontSize = 25 + 'px'
    }
  })
}
