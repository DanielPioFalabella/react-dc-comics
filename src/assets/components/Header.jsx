const Header = () => {
    const navBarArray = [
        "CHARACTERS",
        "COMICS",
        "MOVIES",
        "TV",
        "GAMES",
        "COLLECTIBLES",
        "VIDEOS",
        "FANS",
        "NEWS",
        "SHOP"
    ];

    return (
        <header>
            <figure>
                <img src="./public/dc-logo.png" alt="logo" />
            </figure>
            <nav className="navbar">
                {navBarArray.map((element, index) => (
                    <a href="#"><h4 key={index}>{element}</h4></a>
                ))}
            </nav>
        </header>
    )
}

export default Header