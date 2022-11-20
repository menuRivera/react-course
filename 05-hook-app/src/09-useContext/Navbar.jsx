import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to='/' className={({isactive}) => `nav-link ${isactive ? 'active' : ''}`}>
                            Home
                        </NavLink>

                        <NavLink to='/about' className={({isactive}) => `nav-link ${isactive ? 'active' : ''}`}>
                            About
                        </NavLink>

                        <NavLink to='/login' className={({isactive}) => `nav-link ${isactive ? 'active' : ''}`}>
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}