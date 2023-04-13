export type appTypes = { countPlaces: number; offers: PlaceInfo[] };

export type PlaceInfo = {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
  typeRoom: string;
  premium: boolean;
  ratingStars: string;
  bookmark: boolean;
  town: string;
};

export enum RatingStars {
  One = "20%",
  Two = "40%",
  Three = "60%",
  Four = "80%",
  Five = "100%",
}
