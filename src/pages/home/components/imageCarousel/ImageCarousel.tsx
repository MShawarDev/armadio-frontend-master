import React, { useState } from 'react';
import Slider from 'react-slick';
import './ImageCarousel.scss';
import Image1 from '../../../../assest/home/data/fashion/1.jpeg'
import Image2 from '../../../../assest/home/data/fashion/2.jpeg'
import Image3 from '../../../../assest/home/data/fashion/3.jpeg'
import Image4 from '../../../../assest/home/data/fashion/4.jpeg'
import Image5 from '../../../../assest/home/data/fashion/5.jpeg'
import { Typography } from '@mui/material';

interface ImageData {
    src: string;
    title?: string;
    name: string;
}

const images: ImageData[] = [
    { src: Image1, name: 'Laurena Emad' },
    { src: Image2, name: 'Zac Kapi', },
    { src: Image3, name: 'Name Here', },
    { src: Image4, name: 'Zac Kapi', },
    { src: Image5, name: 'Zac Kapi', },
    { src: Image5, name: 'Laurena Emad', },
];
const data = [
    {
        role: "Fashion Design House",
        list: images
    },
    {
        role: "Fashion Designer",
        list: images
    },
]
const ImageCarousel: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <h3>Meet the Fashion Design Houses & Fashion Designers</h3>
            {data.map((slide, key) => {
                return <Slider {...settings} key={key}>
                    {slide?.list.map((image, index) => (
                        <div
                            className="carousel-item"
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`carousel-overlay ${hoveredIndex === index ? 'active' : ''}`}>
                                <img src={image.src} alt={image.title} className="carousel-image" />
                                <div className="carousel-image-info">
                                    <Typography className="carousel-image-name">{image.name}</Typography>
                                    <Typography className="carousel-image-role">{slide?.role}</Typography>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            })}

        </div>

    );
};

export default ImageCarousel;
