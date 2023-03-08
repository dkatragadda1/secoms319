var cart = [];

function addToCart(productType, productName){
    fetch('../resources/data.json')
    .then(response => response.json())
    .then(data => {
        switch(productType){
            case "shoe":
                for(let product in data.shoes){
                    if(productName == data.shoes[product].name){
                        window.cart.push(data.shoes[product]);
                        console.log("added "+productName+" to cart");
                    }
                }
                break;
            case "shirt":
                for(let product in data.shirts){
                    if(productName == data.shirts[product].name){
                        window.cart.push(data.shirts[product]);
                        console.log("added "+productName+" to cart");
                    }
                }
                break;
            case "hoodie":
                for(let product in data.hoodies){
                    if(productName == data.hoodies[product].name){
                        window.cart.push(data.hoodies[product]);
                        console.log("added "+productName+" to cart");
                    }
                }
                break;
            case "pants":
                for(let product in data.pants){
                    if(productName == data.pants[product].name){
                        window.cart.push(data.pants[product]);
                        console.log("added "+productName+" to cart");
                    }
                }
                break;
            default:
                console.log("Product Type "+productType+" doesn't exist");
                break;
            
        }
    });
    console.log(cart);
}

function loadCart(htmlContainerId){
    let cartList = document.getElementById(htmlContainerId);
    for(let product of window.cart){
        let item = document.createElement("li");
        item.textContent = product.name + " | " + product.price;
        cartList.appendChild(item);
    }
}