import { useState } from "react";
import { Link } from "react-router-dom";
import sportImg from "./sport.jpg"

function Categories() {

    const category = [
        { name: "animals", image: sportImg },
        { name: "sport", image: sportImg },
        { name: "tecnology", image: sportImg },
        { name: "all category", image: sportImg }
    ];
    return (
        <div className="bodyCat">
            <h1 className="title">QUIZ!!!</h1>

            <h1>Categories</h1>
            {category.map(
                (category, idx) =>
                    <Link
                        id="link"
                        to={`/game/${category.name}`}>
                        <img
                            src={category.image} alt={category.name}
                            style={{width:"250px",height:"150px"}}>
                        </img>
                        {/* {category.name} */}
                    </Link>)}
        </div>
    );
}

export default Categories;