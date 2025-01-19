import "./Navbar.css";

function Navbar() {
    return(
        <div>
            <nav className="navbar">
                <a href="#about" className="navLink">
                    About
                </a>
                <a href="#experience" className="navLink">
                    Experience
                </a>
                <a href="#projects" className="navLink">
                    Projects
                </a>
            </nav>

        </div>
    );
}

export default Navbar;
 