fetch("../data/data.json").then(response=>{
    return response.json()
}).then(data=>{
    displayData(data)
})

function displayData(info){
  /*  var sampleElement=document.createElement("img")
    sampleElement.src="img/iphone.jpg";
    sampleElement.classList.add("class1","class2","class3")
    sampleElement.classList.remove("class3")
        var bodyElement = document.querySelector("body");
    bodyElement.append(sampleElement)*/
    var bodyElement = document.querySelector("body");
    var row = document.createElement("section")
    row.classList.add("row","justify-content-center")
    bodyElement.append(row)
    info.mobiles.map(value=>{
        var column=document.createElement("article")
        column.classList.add("col-sm-10","col-md-6","col-lg-3")
        row.append(column)
        //Card
        var card = document.createElement("div");
        card.classList.add("card","mt-1");
        //Card  -body
        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body")
        //image
        var imageElement = document.createElement("img");
        imageElement.src = value.image;
        imageElement.classList.add("img-responsive")
        imageElement.alt=value.name;
        //Name
        var name= document.createElement("h2");
        name.textContent=value.name;
        name.classList.add("text-center", "text-primary");
        //Price
        var price=document.createElement("p");
        price.classList.add("text-danger","text-center","text-block")
        price.innerHTML="<s>₹ "+value.price+" /-</s>";
        var oPrice = document.createElement("p");
        oPrice.classList.add("text-dark","text-center","text-block")
        oPrice.textContent="₹ "+value.originalPrice
        //button
        var buttonParent= document.createElement("div");
        buttonParent.classList.add("d-grid","gap-2");
        var button = document.createElement("button");
        button.classList.add("btn","btn-info","btn-block","m-1");
        button.textContent="Add to cart"
        buttonParent.append(button);
        var buttonParent1= document.createElement("div");
        buttonParent1.classList.add("d-grid","gap-2");
        var button1 = document.createElement("button1");
        button1.classList.add("btn","btn-warning","btn-block","m-1");
        button1.textContent="Buy Now"
        buttonParent1.append(button1);

        cardBody.append(imageElement);
        cardBody.append(name);
        cardBody.append(price)
        cardBody.append(oPrice);
        cardBody.append(buttonParent)
        cardBody.append(buttonParent1)
      //  cardBody.append(button);
        //cardBody.append(button1);
        card.append(cardBody);
        column.append(card);        
    })
}