const Footer = () => {
    return (
        <footer>
            <div className="centratura-contenuto footer-container">
                <div className="footer-text">
                    {/* DC comics */}
                    <div className="footer-text-col">
                        <h3>DC COMICS</h3>
                        <a href="#">Characters</a>
                        <a href="#">Comics</a>
                        <a href="#">Movies</a>
                        <a href="#">TV</a>
                        <a href="#">Games</a>
                        <a href="#">Videos</a>
                        <a href="#">News</a>
                        {/* shop */}
                        <h3>SHOP</h3>
                        <a href="#">Shop DC</a>
                        <a href="#">Shop DC Collectibles</a>
                    </div>
                    <div className="footer-text-col">
                        {/* DC */}
                        <h3>DC</h3>
                        <a href="#">Terms Of Use</a>
                        <a href="#">Privacy policy (New)</a>
                        <a href="#">Ad Choices</a>
                        <a href="#">Advertising</a>
                        <a href="#">Jobs</a>
                        <a href="#">Subscriptions</a>
                        <a href="#">Talent Workshops</a>
                        <a href="#">CPSC Certificates</a>
                        <a href="#">Ratings</a>
                        <a href="#">Shop Help</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="footer-text-col">
                        {/* sites */}
                        <h3>SITES</h3>
                        <a href="#">DC</a>
                        <a href="#">MAD Magazine</a>
                        <a href="#">DC Kids</a>
                        <a href="#">DC Universe</a>
                        <a href="#">DC Power Visa</a>
                    </div>
                </div>
                <div className="footer-img">
                    <img src="./src/assets/img/dc-logo-bg.png" alt="background con logo DC" />
                </div>
            </div>
            <div className="bg-gray">
                <div className="centratura-contenuto">
                    <div className="CTA-social">
                        <button>SIGN-UP NOW!</button>
                        <div className="CTA-social-dx">
                            <h3>FOLLOW US</h3>
                            <img src="./src/assets/img/footer-facebook.png" alt="Facebook" />
                            <img src="./src/assets/img/footer-twitter.png" alt="Twitter" />
                            <img src="./src/assets/img/footer-youtube.png" alt="YouTube" />
                            <img src="./src/assets/img/footer-pinterest.png" alt="Pinteres" />
                            <img src="./src/assets/img/footer-periscope.png" alt="Periscope" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer