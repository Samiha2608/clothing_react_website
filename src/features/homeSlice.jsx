import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    title: 'Uncover And Cultivate Your Distinctive Style',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    bestSellers: [
      { id: 1, image: '/clothing images/pic2.jpg', name: 'Name of the product', price:23, category:'sale' },
      { id: 29, image: '/clothing images/pic4.jpg', name: 'Name of the product', price:23, category:'sale' },
      { id: 30, image: '/clothing images/pic10.jpg', name: 'Name of the product', price:23, category:'sale' },
      { id: 31, image: '/clothing images/pic7.jpg', name: 'Name of the product', price:23, category:'sale' },
      { id: 2, image: '/clothing images/pic4.jpg', name: 'Product 2', price:23, category:'Hot', price:130 , filter:'Women', brand:'Gucci', size:'large' },
      { id: 3, image: '/clothing images/pic5.jpg', name: 'Product 3', price:23, category:'Hot', price:130 , filter:'Women', brand:'Gucci', size:'large' },
      { id: 23, image: '/clothing images/pic9.jpg', name: 'Product 3', price:23, category:'Hot', price:130 , filter:'Women', brand:'Gucci', size:'large' },
      { id: 24, image: '/clothing images/pic10.jpg', name: 'Product 3', price:23, category:'Hot', price:130 , filter:'Women', brand:'Gucci', size:'large' },
      { id: 4, image: '/clothing images/pic6.jpg', name: 'Product 4', price:23, category:'New Arrival', price:130 , filter:'Women', brand:'Gucci', size:'large' },
      { id: 5, image: '/clothing images/pic7.jpg', name: 'Product 4', price:23, category:'New Arrival', price:130 , filter:'Women', brand:'Gucci', size:'large'},
      { id: 25, image: '/clothing images/pic1.jpg', name: 'Product 4', price:23, category:'New Arrival', price:130 , filter:'Women', brand:'Gucci', size:'large' },
      { id: 26, image: '/clothing images/pic3.jpg', name: 'Product 4', price:23, category:'New Arrival', price:130 , filter:'Women', brand:'Gucci', size:'large' },
      { id: 6, image: '/clothing images/pic8.jpg', name: 'Product 4', price:23, category:'Accessories', price:130 , filter:'Women', brand:'Gucci', size:'large' },
      { id: 27, image: '/clothing images/pic5.jpg', name: 'Product 4', price:23, category:'Accessories', price:130 , filter:'Women', brand:'Gucci', size:'large' },
      { id: 28, image: '/clothing images/pic6.jpg', name: 'Product 4', price:23, category:'Accessories', price:130 , filter:'Women', brand:'Gucci', size:'large' },
      { id: 21, image: '/clothing images/pic9.jpg', name: 'Product 4', price:23, category:'Accessories', price:130 , filter:'Women', brand:'Gucci', size:'large' },
      { id: 22, image: '/clothing images/pic10.jpg', name: 'Product 4', price:23, category:'Accessories', price:130 , filter:'Women', brand:'Gucci', size:'large' },
    ],
  },
  reducers: {
    // You can add reducers to update the state here
  },
});

export const selectHome = (state) => state.home;
export default homeSlice.reducer;
