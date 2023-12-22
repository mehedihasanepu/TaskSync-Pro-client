import linkinIcon from "../../../assets/icon/linkedin.png"
import githubIcon from "../../../assets/icon/github.png"
import facebookIcon from "../../../assets/icon/facebook.png"
import twitterIcon from "../../../assets/icon/twitter.png"
import whatsappIcon from "../../../assets/icon/whatsapp.png"
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a href="">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/blogs">Blogs</a>
                    <a href="/dashboard">Dashboard</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="" target="_blank" rel="noreferrer"><img className="w-8 h-8" src={linkinIcon} alt="" /></a>
                        <a href="" target="_blank" rel="noreferrer"><img className="w-8 h-8" src={githubIcon} alt="" /></a>
                        <a href="" target="_blank" rel="noreferrer"><img className="w-8 h-8" src={facebookIcon} alt="" /></a>
                        <a href="" target="_blank" rel="noreferrer"><img className="w-8 h-8" src={twitterIcon} alt="" /></a>
                        <a href="" target="_blank" rel="noreferrer"><img className="w-8 h-8" src={whatsappIcon} alt="" /></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by Mehedi Hasan Epu</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;