export interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  link: string;
  image: string;
  bookmarked?: boolean;
}