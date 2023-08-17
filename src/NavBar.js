const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="logo.png"
            alt="Avatar Logo"
            style={{ width: "40px" }}
            className="rounded-pill"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Galary
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
