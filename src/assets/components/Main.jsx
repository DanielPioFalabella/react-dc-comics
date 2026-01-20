import comics from "./MainComics.js"
import ComicsCard from "./ComicsCard.jsx"

const Main = () => {
    return (
        <main>
            <div className="fascia-nera centratura-contenuto">
                <button className="btn btn-current-series">CURRENT SERIES</button>
                <div className="comics-card-container">
                    {comics.map((comic) => {
                        return (
                            <ComicsCard
                                    thumb={comic.thumb} 
                                    textImg={comic.title}
                                    series={comic.series}/>
                                )
                    })}
                </div>
                <button className="btn btn-load-more">LOAD MORE</button>
            </div>

                <div className="fascia-azzurra">
                    <div className="fascia-azzurra-content">
                        <img src="./src/assets/img/buy-comics-digital-comics.png" alt="" />
                        <a href="#">DIGITAL COMICS</a>
                    </div>
                    <div className="fascia-azzurra-content">
                        <img src="./src/assets/img/buy-comics-merchandise.png" alt="" />
                        <a href="#">DC MERCHANDISE</a>
                    </div>
                    <div className="fascia-azzurra-content">
                        <img src="./src/assets/img/buy-comics-subscriptions.png" alt="" />
                        <a href="#">SUBSCRIPTION</a>
                    </div>
                    <div className="fascia-azzurra-content">
                        <img src="./src/assets/img/buy-comics-shop-locator.png" alt="" />
                        <a href="#">COMIC SHOP LOCATOR</a>
                    </div>
                    <div className="fascia-azzurra-content">
                        <img src="./src/assets/img/buy-dc-power-visa.svg" alt="" />
                        <a href="#">DC POWER VISA</a>
                    </div>
                </div>
        </main>
    )
}

export default Main