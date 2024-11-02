import { configureStore,createSlice } from "@reduxjs/toolkit"; 

const ProductSlice=createSlice({
    name:'product',
    initialState:{
        Mens: [
            { name: 'T-shirt', brand: 'Nike', price: 300 },
            { name: 'Jeans', brand: 'Levis', price: 600 },
            { name: 'Sneakers', brand: 'Adidas', price: 800 }
          ],
          Womens: [
            { name: 'Dress', brand: 'Zara', price: 500 },
            { name: 'Handbag', brand: 'Gucci', price: 1500 },
            { name: 'Heels', brand: 'Steve Madden', price: 700 }
        ],
        kids: [
            { name: 'T-shirt', brand: 'GAP Kids', price: 200 },
            { name: 'Shorts', brand: 'Nike', price: 250 },
            { name: 'Sneakers', brand: 'Adidas', price: 400 }
        ],
        beauty: [
            { name: 'Lipstick', brand: 'Maybelline', price: 250 },
            { name: 'Perfume', brand: 'Chanel', price: 1200 },
            { name: 'Foundation', brand: 'Fenty Beauty', price: 850 }
        ],
        Footwears: [
            { name: 'Running Shoes', brand: 'Nike', price: 1200 },
            { name: 'sliders', brand: 'puma', price: 900 },
            { name: 'slippers', brand: 'crocs', price: 1500 }
        ],
        electronics: [
            { name: 'Smartphone', brand: 'Apple', price: 25000 },
            { name: 'Laptop', brand: 'Dell', price: 9200 },
            { name: 'Wireless Headphones', brand: 'Sony', price: 3000 }
        ]
        
        
      
        
        },
        reducers: {}
      });
      
      

      const cartSlice = createSlice({
        name: 'cart',
        initialState: [],
        reducers: {
            addToCart: (state, action) => {
                const item = state.find(
                    (item) => item.name === action.payload.name
                );
                if (item) {
                    item.quantity += 1;
                } else {
                    state.push({ ...action.payload, quantity: 1 });
                }
            },
        },
    });
    const store = configureStore({
      reducer: {
        product: ProductSlice.reducer,
        cart: cartSlice.reducer, 
      },
    });
    
    export const { addToCart } = cartSlice.actions;
      export default store;
      
    