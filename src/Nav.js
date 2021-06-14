import './Nav.css';
const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark  bg-dark">  
                <a className="navbar-brand logi" href="#">K~K Travels</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav lists">
                        <li className="nav-item ">
                            <a className="nav-link log" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item log">
                            <a className="nav-link log" href="#">Places</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link log" href="#">Todos</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link log" href="#">
                                About
                              </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link log" href="#">
                                Regsiter
                              </a>
                           
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
}
export default Nav;