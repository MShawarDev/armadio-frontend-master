import React, { useState } from 'react';
import './ImageSection.scss';
import First from '../../../../assest/home/fir-img.png'
import Second from '../../../../assest/home/sec-img.png'
import { Link } from '@mui/material';
import Arrow from "../../../../assest/home/arrow-right.svg";
import CreateDesignModal from '../createDesignModel/CreateDesignModal';

interface ImageProps {
    src: string;
    label: string;
    link: string;
    index: string
}

const ImageItem: React.FC<ImageProps> = ({ src, label, link, index }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleDiscoverClick = (index: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (index === "1") {
            e.preventDefault();
            setIsModalOpen(true);
        }

    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="image-container">
            <div className="image-item-overlay"></div>
            <img src={src} alt={label} className="image" />
            <div className="label">
                {label}
                <Link className="link" href={index === "1" ? "#" : link} onClick={handleDiscoverClick(index)} underline='none' alignItems='center'>
                    Discover
                    <img src={Arrow} alt="arrow-right" style={{ position: 'absolute', top: '3px', marginLeft: '1rem' }} />
                </Link>
            </div>
            <CreateDesignModal isOpen={isModalOpen} onClose={handleCloseModal} />

        </div >
    );
};

const ImageSection: React.FC = () => {
    return (
        <div className="image-section">
            <ImageItem src={First} label="Create design" link="/create-design" index="1" />
            <ImageItem src={Second} label="Special Design Request" link="#/authenticated/request-design" index="2" />
        </div>
    );
};

export default ImageSection;
