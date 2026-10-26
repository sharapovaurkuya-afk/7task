export interface Ad {
  id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
}

export interface AdsResponse {
  items: Ad[];
  total: number;
}