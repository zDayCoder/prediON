import { Link } from "react-router-dom";
import './style.css';

function Menu() {

    return(
        <div class="menu" >
            <Link to="/" style={{ color: "white",textDecoration: "none"  }}>Menu</Link>
            <Link to="/predios" style={{ color: "white",textDecoration: "none"  }}>Predios</Link>
        </div>

        
    )
}
export default Menu