import React from "react";
import SectionHeading from "./Sections/Heading/SectionHeading";
import Card from "./Cards/Card";
import Carousel from "react-multi-carousel";
import { responsive } from "./Utils/constants";

function Latest() {
  const items = [
    {
      title: "Shirts",
      image:
        "https://plus.unsplash.com/premium_photo-1671641797812-3828fd53ab17?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "T-Shirts",
      image:
        "https://images.unsplash.com/photo-1622445270936-5dcb604970e7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Jeans",
      image:
        "https://plus.unsplash.com/premium_photo-1689371953070-10782471db47?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Dresses",
      image:
        "https://images.unsplash.com/photo-1599662875272-64de8289f6d8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Hoodies",
      image:
        "https://plus.unsplash.com/premium_photo-1689371957831-40f044457743?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Jackets",
      image:
        "https://images.unsplash.com/photo-1602370463198-086436840055?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Heels",
      image:
        "https://images.unsplash.com/photo-1585488434451-7ee645d0574b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Skirts",
      image:
        "https://images.unsplash.com/photo-1619627826693-8b40c611ca59?q=80&w=972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Blazers",
      image:
        "https://images.unsplash.com/photo-1594168087746-d94175b42394?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Gowns",
      image:
        "https://images.unsplash.com/photo-1732511405785-73ad31e59096?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1607792246307-2c7ba687b50a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Loafers",
      image:
        "https://plus.unsplash.com/premium_photo-1695604461285-09f2cf47ec80?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="Latets-section">
      <SectionHeading title={"Now Trending Fashion For Women's"} />
      
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        partialVisible={false}

      >
        {items &&
          items.map((data, index) => (
            <Card key={index} imageSrc={data.image} imageTitle={data.title} />
          ))}
      </Carousel>
      
    </div>
  );
}

export default Latest;
