import { ReactNode, useEffect, useRef, useState } from 'react';
import './CardScroller.component.scss';

interface CardScrollerProps {
    children: ReactNode;
}

export const CardScrollerComponent: React.FC<CardScrollerProps> = (
    props: CardScrollerProps,
) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } =
                    scrollerRef.current;
                setShowLeftButton(scrollLeft > 0);
                setShowRightButton(scrollLeft + clientWidth < scrollWidth);
            }
        };

        const checkScrollability = () => {
            if (scrollerRef.current) {
                const { scrollWidth, clientWidth } = scrollerRef.current;
                setShowLeftButton(scrollWidth > clientWidth);
                setShowRightButton(scrollWidth > clientWidth);
            }
        };

        if (scrollerRef.current) {
            // Add scroll event listener
            scrollerRef.current.addEventListener('scroll', handleScroll);
            // Call initial scroll handler to set button visibility
            checkScrollability();
        }

        return () => {
            if (scrollerRef.current) {
                scrollerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleScroll = (scrollOffset: number) => {
        if (scrollerRef.current) {
            // scrollerRef.current.scrollLeft += scrollOffset;
            scrollerRef.current.scrollTo({
                left: scrollerRef.current.scrollLeft + scrollOffset,
                behavior: 'smooth', // Enable smooth scrolling behavior
            });
        }
    };

    return (
        <section className="card-scroller-component">
            <div className="card-scroller" ref={scrollerRef}>
                {props.children}
            </div>
            {showLeftButton && (
                <button
                    className="scroll-btn left"
                    onClick={() => handleScroll(-412)}
                >
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                </button>
            )}

            {showRightButton && (
                <button
                    className="scroll-btn right"
                    onClick={() => handleScroll(412)}
                >
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </button>
            )}
        </section>
    );
};
