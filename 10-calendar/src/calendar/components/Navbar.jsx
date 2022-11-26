export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark text-white mb-4 px-4">
            <span>
                <i className="fas fa-calendar-alt">
                    &nbsp;
                    Manuel
                </i>
            </span>

            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
                <span>Salir</span>
            </button>
        </div>
    )
}