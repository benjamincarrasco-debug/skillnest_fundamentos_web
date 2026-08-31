const galeria = document.getElementById("campo")

galeria.addEventListener("mouseover", function(){
galeria.src = "static/images/noche-estrellada-sobre-el-ródano.png"
})

galeria.addEventListener("mouseout", function(){
galeria.src = "static/images/campo-de-trigo-con-cipreses.png"
})