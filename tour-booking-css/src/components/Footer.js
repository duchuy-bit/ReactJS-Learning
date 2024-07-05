import "./FooterStyles.css";

function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Dev Panda</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-behance-square"></i>
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Version</a>
                </div>

                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Version</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Toubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Other</h4>
                    <a href="/">Term of Services</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
