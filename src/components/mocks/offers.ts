import { PlaceInfo } from "../../types/types";
import { RatingStars } from "../../types/types";

export const offers: PlaceInfo[] = [
  {
    title: "Name №1",
    price: 120,
    imgSrc: "img/apartment-01.jpg",
    typeRoom: "apartment",
    premium: true,
    ratingStars: RatingStars.Five,
    bookmark: false,
  },
  {
    title: "Name №2",
    price: 90,
    imgSrc: "img/apartment-02.jpg",
    typeRoom: "apartment",
    premium: false,
    ratingStars: RatingStars.Four,
    bookmark: false,
  },
  {
    title: "Name №3",
    price: 437,
    imgSrc: "img/apartment-03.jpg",
    typeRoom: "Luxe",
    premium: true,
    ratingStars: RatingStars.Five,
    bookmark: true,
  },
  {
    title: "Name №4",
    price: 60,
    imgSrc: "img/room.jpg",
    typeRoom: "apartment",
    premium: false,
    ratingStars: RatingStars.Three,
    bookmark: true,
  },
  {
    title: "Name №5",
    price: 80,
    imgSrc: "img/room.jpg",
    typeRoom: "apartment",
    premium: false,
    ratingStars: RatingStars.Four,
    bookmark: false,
  },
];
