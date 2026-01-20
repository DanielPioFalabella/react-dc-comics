const Header = () => {
    const navBarArray = [
        {id: "1", text: "CHARACTERS", url: "#", current: false},
        {id: "2", text: "COMICS", url: "#", current: true},
        {id: "3", text: "MOVIES", url: "#", current: false},
        {id: "4", text: "TV", url: "#", current: false},
        {id: "5", text: "GAMES", url: "#", current: false},
        {id: "6", text: "COLLECTIBLES", url: "#", current: false},
        {id: "7", text: "VIDEOS", url: "#", current: false},
        {id: "8", text: "FANS", url: "#", current: false},
        {id: "9", text: "NEWS", url: "#", current: false},
        {id: "10", text: "SHOP", url: "#", current: false},
    ];

    return (
        <header>
            <figure>
                <img src="./public/dc-logo.png" alt="logo" />
            </figure>
            <nav className="navbar">
                <ul>
                {navBarArray.map((navBarElement) => (
                    <li key={navBarElement.id}>
                    <a href={navBarElement.url}><h4 className={navBarElement.current? "active" : ""}>{navBarElement.text}</h4></a>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header