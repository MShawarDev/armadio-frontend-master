import React from 'react';
import './ImageGrid.scss';
import Image1 from "../../../../assest/home/data/1.png"
import Image2 from "../../../../assest/home/data/2.png"
import Image3 from "../../../../assest/home/data/3.png"
import Image4 from "../../../../assest/home/data/4.png"
import Image5 from "../../../../assest/home/data/5.png"
import { Button } from '@mui/material';

interface ImageData {
  src: string;
  title: string;
  price: string;
}

const images: ImageData[] = [
  { src: Image1, title: 'Beige Long Wool Coat Women', price: '$10' },
  { src: Image2, title: 'Woman Trendy Dress', price: '$20' },
  { src: Image3, title: 'Navy Women Pants', price: '$30' },
  { src: Image4, title: 'Men Shirts', price: '$40' },
  { src: Image5, title: 'Men T-shirts', price: '$50' },
  { src: Image5, title: 'Blue Men Jeans', price: '$60' },
];

const ImageGrid: React.FC = () => {
  return (
    <div className='grid-container'>
      <h3>Best Seller Product</h3>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-card" key={index}>
            <div className="image-container">
              <img src={image.src} alt={image.title} className="image" />
            </div>
            <div className="image-info">
              <h3>{image.title}</h3>
              <p>{image.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Button className="styled-button">
        Explore More
      </Button>
    </div>

  );
};

export default ImageGrid;
