import React, { useState } from "react";
import "./Main.css";
import firstImage from "../../images/firstImage.png";
import seconImage from "../../images/secondImage.png";
import main1 from "../../images/main1.jpg";
import main2 from "../../images/main2.jpg";
import {
  CardImg,
  Nav,
  NavItem,
  Card,
  CardSubtitle,
  CardBody,
  CardTitle,
} from "reactstrap";

export default function Main() {
  const [navImage, setNavImage] = useState([
    { src: firstImage, class: "first-image" },
    { src: seconImage, class: "second-image" },
  ]);
  const [verticalNav, setVerticalNav] = useState([
    {
      id: 0,
      HeaderBrunch: "Feature Auckland deals",
      numBrunch: "283",
    },
    {
      id: 1,
      HeaderBrunch: "Collections",
      numBrunch: "44",
    },
    {
      id: 2,
      HeaderBrunch: "Activities, Events & Outdoors",
      numBrunch: "269",
    },
    {
      id: 3,
      HeaderBrunch: "Picked for You ",
      numBrunch: " ",
    },
    {
      id: 4,
      HeaderBrunch: "Store",
      numBrunch: "5189 ",
    },
    {
      id: 5,
      HeaderBrunch: "Restaurants, Bars, Cafes",
      numBrunch: "18",
    },
    {
      id: 6,
      HeaderBrunch: "Beauty, Massage & Spa ",
      numBrunch: "408",
    },
    {
      id: 7,
      HeaderBrunch: "House & Garden ",
      numBrunch: "2537",
    },
    {
      id: 8,
      HeaderBrunch: "Fitness & Sports ",
      numBrunch: "296",
    },
    {
      id: 9,
      HeaderBrunch: "Automotive ",
      numBrunch: "157",
    },
  ]);
  const [cards, setCards] = useState([
    {
      src: main1,
      CardTitle: "Luxury 5-Star Auckland Stay at Cordis",
      CardSubTitle: "Elah Hair And Beauty Limited",
      CardMuted: "Mount Eden",
      bought: "5 bought",
      del: "$150",
      price: "$100",
    },
    {
      src: main2,
      CardTitle: "Mt Cheeseman Ski Area Lift Pass",
      CardSubTitle: " My Smile Clinic NZ",
      CardMuted: "Mount Eden",
      bought: "8 bought",
      del: "$160",
      price: "$120",
    },
  ]);
  return (
    <div>
      <div className="container-me">
        {navImage.map((img) => (
          <CardImg
            key={img.src}
            className={`mt-4 ${img.class}`}
            alt="Explore New Zealand"
            src={img.src}
            top
            width="100%"
          />
        ))}
        <div className="d-flex">
          <aside className="aside-nav mt-4">
            <header className="nav-header">Discover</header>

            <Nav vertical>
              {verticalNav.map((ver) => (
                <NavItem key={ver.id} className="branch-nav">
                  <h6 className="heade-brunch">{ver.HeaderBrunch} </h6>
                  <span className="num-brunch">{ver.numBrunch}</span>
                </NavItem>
              ))}
            </Nav>
          </aside>
          <div className=" card-aside mt-4 ">
            {cards.map((card, i) => (
              <div key={i} className="mx-3">
                <Card>
                  <CardImg
                    alt="Card image cap"
                    src={card.src}
                    top
                    width="100%"
                  />

                  <div className="overlay">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>

                  <CardBody>
                    <CardTitle tag="h5">{card.CardTitle}</CardTitle>
                    <CardSubtitle className="mb-2 text-primary" tag="h6">
                      {card.CardSubTitle}
                    </CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {card.CardMuted}
                    </CardSubtitle>
                    <div className="d-flex justify-content-between mt-4">
                      <div className="bought">{card.bought}</div>
                      <div>
                        <span className="from">from</span>
                        <div className="d-flex">
                          <del>{card.del}</del>
                          <h2 className="price">{card.price}</h2>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
