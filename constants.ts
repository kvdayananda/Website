import { Food } from './types';

export const MOCK_MENU: Food[] = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with cheddar, lettuce, tomato, and house sauce.",
    price: 12.99,
    category: "Burgers",
    image_url: "https://picsum.photos/400/300?random=1"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh basil, mozzarella, and san marzano tomato sauce.",
    price: 14.50,
    category: "Pizza",
    image_url: "https://picsum.photos/400/300?random=2"
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine, parmesan, croutons, and creamy caesar dressing.",
    price: 9.99,
    category: "Salads",
    image_url: "https://picsum.photos/400/300?random=3"
  },
  {
    id: 4,
    name: "Spaghetti Carbonara",
    description: "Traditional roman pasta with egg, cheese, pancetta, and pepper.",
    price: 16.00,
    category: "Pasta",
    image_url: "https://picsum.photos/400/300?random=4"
  },
  {
    id: 5,
    name: "Grilled Salmon",
    description: "Atlantic salmon served with roasted vegetables and lemon butter.",
    price: 22.00,
    category: "Mains",
    image_url: "https://picsum.photos/400/300?random=5"
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
    price: 8.50,
    category: "Desserts",
    image_url: "https://picsum.photos/400/300?random=6"
  }
];

export const TABLE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];