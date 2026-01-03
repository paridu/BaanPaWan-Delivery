export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  inCart?: boolean;
  quantity?: number;
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
  category: string;
}

export interface OrderHistoryItem {
  id: string;
  name: string;
  restaurant: string;
  price: number;
  image: string;
  lastOrdered: string;
}