window.addEventListener("resize", cambiaImg);
function cambiaImg(){
	width = window.innerWidth;
	img = document.getElementById('imagen');
	if(width<=900 && width>=651){
		img.src = "./img/colectatoy.jpg";
		img.style.width = "65%";
	}else if(width<=650 && width>=400){
		img.src = "./img/juguetes.jpg";
	}else if(width>900){
		img.src = "./img/rulo.jpg";
		img.style.width = "50%";
	}
}