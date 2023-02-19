import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [user, setUser] = useState("");

    return (
        <div className="bodyHome">
            <h1 className="title">QUIZ!!!</h1>
            <h3>
                hello {user}
            </h3>
            <Link to={"/categories"}> בחר קטגוריה </Link>
        </div>

    )
}
export default Home;