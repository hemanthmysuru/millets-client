import { CardScrollerComponent } from '../../components/card-scroller/CardScroller.component';
import { CardComponent, ICardInfo } from '../../components/card/Card.component';
import './StorePage.scss';

const StorePage: React.FC = () => {
    const cardList: ICardInfo[] = [
        {
            imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-pro-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1713308272816',
            blockHeader: 'IPAD PRO',
            header: 'Thinpossible',
            desc: 'From ₹99900.00‡',
            hasDarkBg: true,
        },
        {
            imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1713308272877',
            blockHeader: 'IPAD AIR',
            header: 'Fresh Air',
            desc: 'From ₹59900.00‡',
            hasDarkBg: false,
        },
        {
            imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692719973220',
            blockHeader: 'IPHONE 15',
            header: 'Newphoria',
            desc: 'From ₹3329.00/mo. for 24 mo. with No Cost EMI § or ₹79900.00‡',
            hasDarkBg: false,
        },
        {
            imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844',
            blockHeader: 'IPHONE 15 PRO',
            header: 'Titanium',
            desc: 'From ₹5621.00/mo. for 24 mo. with No Cost EMI § or ₹134900.00‡',
            hasDarkBg: true,
        },
        {
            imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202309_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1693861933617',
            blockHeader: 'APPLE WATCH ULTRA 2',
            header: 'Next-level adventure.',
            desc: 'From ₹89900.00‡',
            hasDarkBg: false,
        },
        {
            imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1713308272877',
            blockHeader: 'IPAD AIR',
            header: 'Fresh Air',
            desc: 'From ₹59900.00‡',
            hasDarkBg: false,
        },
        {
            imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-bands-202403?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1709069122317',
            blockHeader: 'NEW',
            header: 'Arm candy. In all-new flavours. ',
            desc: 'Shop the latest strap styles and colours.',
            hasDarkBg: false,
        },
    ];
    return (
        <section className="store-page">
            <section className="card-scoller-container">
                <header>
                    The latest. Take a look at what’s new right now.
                </header>
                <CardScrollerComponent>
                    {cardList.map((item: ICardInfo, i: number) => (
                        <CardComponent
                            key={i}
                            imgSrc={item?.imgSrc}
                            blockHeader={item?.blockHeader}
                            header={item?.header}
                            desc={item?.desc}
                            hasDarkBg={item?.hasDarkBg}
                        ></CardComponent>
                    ))}
                </CardScrollerComponent>
            </section>
        </section>
    );
};

export default StorePage;
