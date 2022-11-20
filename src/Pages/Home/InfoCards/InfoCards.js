import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      _id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00 pm everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      _id: 2,
      name: "Visit Our Location",
      description: "Brooklyn, NY 10036, United States",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      _id: 3,
      name: "Contact us now",
      description: "+000 123 456789",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <InfoCard key={card._id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
