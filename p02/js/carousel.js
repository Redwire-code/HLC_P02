/*cuando cargue la página, cargaremos una nueva instancia de glider
(librería usada para hacer el carrusel de imágenes*/ 
window.addEventListener('load',function(){
	//Pasamos por parámetros la clase del contenedor de las imágenes
	//del carrusel									
	new Glider(document.querySelector('.items__carousel'),{
		slidesToShow:1, //Numero de imágenes/elementos a mostrar
		slidesToScroll:1,  //Número de imágenes/elementos a desplazar
		draggable:true,  //Arrastrable con el ratón
		dots: '.indic', //Indicadores de carrusel
		arrows:{
			prev: '.carousel__previous', //Botón de atrás
			next: '.carousel__next' //Botón de siguiente
		},
		responsive: [
			{
			  
			  breakpoint: 694,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 1,
				
			  }


			},{
			  // screens greater than >= 1024px
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				
			  }
			},{
				breakpoint: 911,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 3,
				  slidesToScroll: 1,
				}
			}
		  ]
	});
});

