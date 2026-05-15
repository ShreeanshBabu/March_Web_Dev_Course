import React from "react";
import "./ProductCard.css";
import Btn from "./Button";

function Card(){
    return(
        <div className="main">

            <div className="product">
                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/2/823a50dNike-IR7337-121_1.jpg?rnd=20200526195200&tr=w-1536"  />
                <h2>Shoe 1</h2>
                <Btn />
            </div>

            <div className="product">
                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/2/823a50dNike-IR7337-121_1.jpg?rnd=20200526195200&tr=w-1536"  />
                <h2>Shoe 2</h2>
                <Btn />
            </div>

            <div className="product">
                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/2/823a50dNike-IR7337-121_1.jpg?rnd=20200526195200&tr=w-1536"  />
                <h2>Shoe 3</h2>
                <Btn />
            </div>

        </div>
    )
}

export default Card