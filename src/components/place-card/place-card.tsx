import React, { useState } from "react";
import { PlaceInfo } from "../../types/types";
import { Link } from "react-router-dom";

function PlaceCard({
  id,
  price,
  title,
  imgSrc,
  typeRoom,
  premium,
  ratingStars,
  bookmark,
}: PlaceInfo): JSX.Element {
  const [active, setActive] = useState(false);
  return (
    <>
      <article
        onMouseEnter={() => setActive(active)}
        onMouseLeave={() => setActive(false)}
        className="cities__place-card place-card"
      >
        {premium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={"offer/" + id}>
            <img
              className="place-card__image"
              src={imgSrc}
              width="260"
              height="200"
              alt="Place image"
            ></img>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={
                bookmark
                  ? "place-card__bookmark-button button  place-card__bookmark-button--active"
                  : "place-card__bookmark-button button"
              }
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: ratingStars }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{typeRoom}</p>
        </div>
      </article>
    </>
  );
}

export default PlaceCard;
