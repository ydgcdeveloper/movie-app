export interface MovieModel {
  id?: number;
  title: string;
  description: string;
  rating: number;
  duration: string;
  genre: string[];
  released_date: string;
  trailer_link: string;
  image: string;
  watchList?: boolean;
}
