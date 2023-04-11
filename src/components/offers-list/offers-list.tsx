import React from "react";

import PlaceCard from "../place-card/place-card";
import { appTypes } from "../../types/types";

function OffersList({ offers }: appTypes): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          id={offer.id}
          title={offer.title}
          price={offer.price}
          imgSrc={offer.imgSrc}
          typeRoom={offer.typeRoom}
          premium={offer.premium}
          ratingStars={offer.ratingStars}
          bookmark={offer.bookmark}
        />
      ))}
    </>
  );
}

export default OffersList;
