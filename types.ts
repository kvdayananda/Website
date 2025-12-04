export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
}

export interface CartItem extends Food {
  quantity: number;
}

export type OrderStatus = 'pending' | 'preparing' | 'served' | 'paid';

export interface Order {
  id: number;
  table_no: number;
  items: CartItem[];
  total_amount: number;
  status: OrderStatus;
  created_at: string; // ISO string
}

export interface ChartData {
  name: string;
  value: number;
}