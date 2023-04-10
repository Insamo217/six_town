export type PlaceInfo = {
  title: string;
  price: number;
  imgSrc: string;
  typeRoom: string;
  premium: boolean;
  ratingStars: string;
  bookmark: boolean;
};

export enum RatingStars {
  One = "20%",
  Two = "40%",
  Three = "60%",
  Four = "80%",
  Five = "100%",
}
