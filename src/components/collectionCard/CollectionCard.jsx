import React, { useState } from "react";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import coll1 from "../../images/coll1.jpg";
import coll2 from "../../images/coll2.jpg";
import coll3 from "../../images/coll3.jpg";
import coll4 from "../../images/coll4.jpg";

export default function CollectionCard() {
  const [collCard, setCollCard] = useState([
    { id: 0, src: coll1, CardTitle: "Ugg collection" },
    { id: 1, src: coll2, CardTitle: "Vivo Hair & Beauty" },
    { id: 2, src: coll3, CardTitle: "South Island Getaways" },
    { id: 3, src: coll4, CardTitle: "Linden Leaves" },
  ]);
  return (
    <div>
      <div className="container-me ">
        <div>
          <h3 className="featur-header">Collections</h3>
          <div className="btn mx-2">
            <Button color="primary">View More ></Button>
          </div>
        </div>
        {/* <!-- Cards --> */}
        <div className="card-feature mt-4">
          {collCard.map((card) => (
            <Card
              key={card.id}
              className="animate__animated animate__heartBeat"
            >
              <CardImg alt="Card image cap" src={card.src} top width="100%" />
              <CardBody>
                <CardTitle className="text-center" tag="h6">
                  {card.CardTitle}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-primary text-center"
                  tag="h6"
                >
                  Multiple deals
                </CardSubtitle>
                <div className="text-center mt-4">
                  <Button color="info" outline>
                    {" "}
                    View Collection >
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
