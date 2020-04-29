var imagesList = [
	"https://149349300.v2.pressablecdn.com/wp-content/uploads/2019/06/3d-cube-background-4k-yo.jpg",
	"https://wallpaperplay.com/walls/full/9/a/f/48870.jpg",
	"https://wallpaperplay.com/walls/full/e/2/c/48876.jpg",
	"https://wallpaperplay.com/walls/full/8/1/d/48877.jpg",
	"https://wallpaperplay.com/walls/full/0/2/c/48880.jpg",
	"https://wallpaperplay.com/walls/full/e/2/c/48876.jpg",
]

function createSlider() {

	for (var i = 0; i < imagesList.length; i++) {
		addImageToSlider(imagesList[i], i);
	}

}
 
function addImageToSlider(imgUrl, index) {
	//<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	var liTag = document.createElement("li");
	liTag.setAttribute("data-target", "#carouselExampleIndicators");
	liTag.setAttribute("data-slide-to", index);
	if (index == 0) {
		liTag.setAttribute("class", "active");
	}
	document.querySelector(".carousel-indicators").append(liTag);
/*
	<div class="carousel-item ">
		<img src="https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="...">
	</div> */

	var divTag = document.createElement("div");
	divTag.setAttribute("class", 'carousel-item');
	if (index == 0) {
		divTag.setAttribute("class", "carousel-item active");
	}
	imgTag = document.createElement("img");
	imgTag.setAttribute("src", imgUrl);
	imgTag.setAttribute('class', 'd-block w-100');
	divTag.append(imgTag);
	document.querySelector(".carousel-inner").append(divTag);

}

createSlider();