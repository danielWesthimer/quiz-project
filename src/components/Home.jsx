import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [user, setUser] = useState("");
    const category=["animals","sport","tecnology", "all category"];
    return (
        <div>
            <h3>
                hello {user}
            </h3>
            <h1>Categories</h1>
            {category.map(
                (category,idx)=>
                <Link to={`/game/${category}`}>{idx+1}. {category}.   </Link> ) }
        </div>
    )
}
export default Home;