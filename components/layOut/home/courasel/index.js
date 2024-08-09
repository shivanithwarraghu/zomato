import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
      showArrows={true}
    >
      <div
        style={{ maxHeight: "36rem" }}
        className="object-center brightness-50"
      >
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBpenphfGVufDB8fHx8MTY1NzI5MjMwMA&ixlib=rb-1.2.1&q=80&w=400" alt='pizza' />
        <p className="legend">Pizza</p>
      </div>
      <div
        style={{ maxHeight: "36rem" }}
        className="object-center brightness-50"
      >
        <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJ1cmdlcnxlbnwwfHx8fDE2NTcyOTI1MDA&ixlib=rb-1.2.1&q=80&w=400" alt='burger' />
        <p className="legend">Burger</p>
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
