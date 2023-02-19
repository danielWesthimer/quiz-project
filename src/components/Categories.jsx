import { useState } from "react";
import { Link } from "react-router-dom";
import sportImg from "./images/sport.jpg"
import politicsImg from "./images/politicsImg.jpg"
import tecImg from "./images/tecImg.jpg"

function Categories() {

    const category = [
        { name: "politics", image: politicsImg },
        { name: "sport", image: sportImg },
        { name: "tecnology", image: tecImg },
        { name: "all categories", image: sportImg }
    ];
    return (
        <div className="bodyCat">
            <h1 className="title">QUIZ!!!</h1>

            <h1>Categories</h1>
            {category.map(
                (category, idx) =>
                    <div style={{display:"inline-block" ,marginLeft:"20px"}}>
                        <Link 
                            id="link"
                            to={`/game/${category.name}`}>
                            <img 
                                src={category.image} alt={category.name}
                                style={{ width: "250px", height: "150px",display:"inline-block" ,borderRadius:"25px"}}>
                            </img>
                        </Link>
                          <p>{category.name} </p>
                    </div>)}
        </div>
    );
}

export default Categories;