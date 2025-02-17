import React, { useState } from 'react';
import './NewsSection.scss';
import Image1 from '../../../../assest/home/data/news/1.png'
import Image2 from '../../../../assest/home/data/news/2.png'
import Image3 from '../../../../assest/home/data/news/3.png'
import Arrow from "../../../../assest/home/arrow-right.svg"

export interface NewsItem {
    id: number,
    src: string;
    date: string;
    title: string;
    link: string;
}


interface NewsSectionProps {
    blog?: boolean;
}
const NewsSection: React.FC<NewsSectionProps> = ({ blog = false }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    let news: NewsItem[] = [
        { id: 1, src: Image1, date: 'OCTOBER, 2023', title: '7 Diffreent Types and Style Of Blazers', link: '#readmore1' },
        { id: 2, src: Image2, date: 'MAY, 2024', title: '7 Diffreent Types and Style Of Blazers', link: '#readmore2' },
        { id: 3, src: Image3, date: 'JUNE, 2024', title: '7 Diffreent Types and Style Of Blazers', link: '#readmore3' },
        { id: 4, src: Image3, date: 'JUNE, 2024', title: '7 Diffreent Types and Style Of Blazers', link: '#readmore3' },
        { id: 5, src: Image3, date: 'JUNE, 2024', title: '7 Diffreent Types and Style Of Blazers', link: '#readmore3' },
    ];
    news = blog ? news : news.slice(0, 3)

    return (
        <div className={blog ? "blogs-section-container " : "news-blogs-section-container"} >
            {!blog && <h3 className='news-blogs-section-title'>News & Blogs</h3>}
            <div className="news-blogs-section" style={{ padding: blog ? 0 : '5rem' }}>
                {news.map((item, index) => (
                    <div
                        className="news-item"
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{ backgroundImage: `url(${item.src})` }}
                    >
                        <div className={`news-overlay ${hoveredIndex === index ? 'active' : ''}`}>
                            <div className="news-info">
                                <p className="date">{item.date}</p>
                                <h3 className="title">{item.title}</h3>
                                <a href={item.link} className="read-more">
                                    Read More
                                    <img src={Arrow} alt="arrow-right" style={{ marginLeft: '1rem' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsSection;
