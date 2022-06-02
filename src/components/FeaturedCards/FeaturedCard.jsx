import React, { useState } from "react";

import "./FeaturedCard.css";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import card1 from "../../images/card1.jpg";
import card2 from "../../images/card2.jpg";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.jpg";
import card5 from "../../images/card5.jpg";
import card6 from "../../images/card6.jpg";
import card7 from "../../images/card7.jpg";
import card8 from "../../images/card8.jpg";

export default function FeaturedCard() {
  const [featureCard, setFeaturCard] = useState([
    {
      id: 0,
      src: card1,
      CardTitle: "HelloFresh Special Offer",
      CardSubTitle: " Cordis",
      bought: "561 bought",
      del: "$501",
      Price: "$279",
    },
    {
      id: 1,
      src: card2,
      CardTitle: "Pamper Package with Swedish",
      CardSubTitle: " Image Oasis Medispa Botany",
      bought: "544 bought",
      del: "$331",
      Price: "$285",
    },
    {
      id: 2,
      src: card3,
      CardTitle: "Waiheke Wine Tour",
      CardSubTitle: " Waiheke Pick-Me-Up Tours",
      bought: "550 bought",
      del: "$250",
      Price: "$200",
    },
    {
      id: 3,
      src: card4,
      CardTitle: "Dental Exam Package",
      CardSubTitle: "  Apex Dental",
      bought: "550 bought",
      del: "$150",
      Price: "$100",
    },
    {
      id: 4,
      src: card5,
      CardTitle: "Dental Exam Package",
      CardSubTitle: "  Apex Dental",
      bought: "550 bought",
      del: "$150",
      Price: "$100",
    },
    {
      id: 5,
      src: card6,
      CardTitle: "Dental Exam Package",
      CardSubTitle: "  Apex Dental",
      bought: "550 bought",
      del: "$150",
      Price: "$100",
    },
    {
      id: 6,
      src: card7,
      CardTitle: "Dental Exam Package",
      CardSubTitle: "  Apex Dental",
      bought: "550 bought",
      del: "$150",
      Price: "$100",
    },
    {
      id: 7,
      src: card8,
      CardTitle: "Dental Exam Package",
      CardSubTitle: "  Apex Dental",
      bought: "550 bought",
      del: "$150",
      Price: "$100",
    },
  ]);
  return (
    <div className="container-me">
      <div>
        <h3 className="featur-header">Featured Auckland deals</h3>
        <div className="btn mx-2">
          <Button color="primary">View More ></Button>
        </div>
      </div>
      {/* <!-- Cards --> */}
      <div className="card-feature mt-4 ">
        {/* cards */}
        {featureCard.map((card) => (
          <Card key={card.id} className="animate__animated animate__bounceInUp">
            <CardImg alt="Card image cap" src={card.src} top width="100%" />
            <CardBody>
              <CardTitle tag="h6">{card.CardTitle}</CardTitle>
              <CardSubtitle className="mb-2 text-primary" tag="h6">
                {card.CardSubTitle}
              </CardSubtitle>
              <div className="d-flex justify-content-between mt-4">
                <div className="mt-4">{card.bought}</div>
                <div>
                  <span className="from-card">from</span>
                  <p>
                    <del>{card.del}</del>
                    <span className="price-after">{card.Price}</span>
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
