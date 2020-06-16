var data = [
    {
        name: "Mobile",
        price: 80000,
        manufacture: "Apple",
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX466_.jpg"
    },
    {
        name: "Laptop",
        price: 130000,
        manufacture: "Dell",
        imagePath: "https://static.toiimg.com/photo/54239081/Dell-Alienware-M14X-Laptop.jpg"
    },
    {
        name: "Smart Watch",
        price: 50000,
        manufacture: "Samsung",
        imagePath: "https://www.powerplanetonline.com/cdnassets/samsung_galaxy_watch_active_2_40mm_aluminio_r820_negro_aqua_01_l.jpg"
    },
    {
        name: "Chrome Cast",
        price: 5000,
        manufacture: "Google",
        imagePath: "https://i.pcmag.com/imagery/reviews/07puZ5EukhhOMY2ywBEnNFn-3.fit_scale.size_1028x578.v_1569477389.jpg"
    }
];

function AddProductDetails(productData){

    var divtag = document.createElement("div");
    divtag.setAttribute("class", "productDetails");

    var uiList = document.createElement("ui");
    uiList.setAttribute("class", "products");

    var liName = document.createElement("li");
    liName.innerHTML = "<b> Product Name:</b>"+" "+productData.name;
    uiList.append(liName);

    var liPrice = document.createElement("li");
    liPrice.innerHTML = "<b> Product Price: </b>"+" "+productData.price;
    uiList.append(liPrice);

    var liManu = document.createElement("li");
    liManu.innerHTML="<b> Product Manufacture: </b>"+" "+productData.manufacture;
    uiList.append(liManu);

    var liProImg = document.createElement("li");
    var proImg = document.createElement("img");
    proImg.setAttribute("src",productData.imagePath);

    liProImg.append(proImg);
    uiList.append(liProImg);
    divtag.append(uiList);
    document.querySelector(".container").append(divtag);

}

function showDetails(){
    for(var i=0; i<data.length; i++)
    {
        AddProductDetails(data[i]);
    }
}