import './Card.component.scss';

export interface ICardInfo {
    imgSrc: string;
    blockHeader: string;
    header: string;
    desc: string;
    hasDarkBg: boolean;
}

export const CardComponent: React.FC<ICardInfo> = (props: ICardInfo) => {
    const cardClass = `card-component ${props?.hasDarkBg ? 'dark-bg' : ''}`;

    return (
        <section className={cardClass}>
            <article className="card-content">
                <aside className="card-info-and-img">
                    <figure>
                        <img src={props?.imgSrc} alt="" />
                    </figure>

                    <div className="info">
                        <h3 className="eyebrow">{props?.blockHeader}</h3>
                        <header className="header">{props?.header}</header>
                        <p className="desc">{props?.desc}</p>
                    </div>
                </aside>
            </article>
        </section>
    );
};
