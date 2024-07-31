import './Footer.component.scss';
import { FooterLegalContent, FooterLinkList } from './Footer.content';

const FooterComponent: React.FC = () => {
    return (
        <footer className="footer-component">
            <div className="footer-content">
                <section className="legal-content">
                    {FooterLegalContent.map((section, i) => (
                        <div key={i} className="container">
                            <header>{section.header}</header>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </section>
                <hr />

                <section className="links-and-address">
                    {/* <address>
                        #3242, 1st Floor, M-Far, Manyatha Tech Park, Nagawara,
                        Bengaluru - 570008 <br />
                        Phone - +91 97526 81231
                    </address> */}

                    <div className="links-wrapper">
                        <section className="grid-container">
                            {FooterLinkList.map((section, i) => (
                                <div key={i} className="grid-item">
                                    <header>{section.header}</header>
                                    {section.links.map((link, j) => (
                                        <a href={link.link} key={j}>
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            ))}
                        </section>
                    </div>
                </section>

                <hr />

                <section className="copyrights">
                    <p>Copyrights @ 2024 Fruit.Inc. All rights reserved.</p>
                    <nav>
                        <a href="">Privacy policy</a>
                        <a href="">Terms of use</a>
                        <a href="">Sales policy</a>
                        <a href="">Site map</a>
                    </nav>
                </section>
            </div>
        </footer>
    );
};

export default FooterComponent;
