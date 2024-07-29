import './Header.component.scss';

const HeaderComponent: React.FC = () => {
    return (
        <header className="header-component">
            <figure className="logo">
                <span className="material-symbols-outlined">grocery</span>
            </figure>

            <nav>
                <a href="/store">Store</a>
                <a href="/support">Support</a>
                {/* <a href="/">Store</a> */}
            </nav>

            <figure className="search">
                <span className="material-symbols-outlined">search</span>
            </figure>

            <figure className="cart">
                <span className="material-symbols-outlined">shopping_bag</span>
            </figure>
        </header>
    );
};

export default HeaderComponent;
