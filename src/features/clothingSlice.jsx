import { createSlice } from '@reduxjs/toolkit';

const clothingSlice = createSlice({
  name: 'clothing',
  initialState: {
    clothingItems: [
      { id: 7, image: '/clothing images/pic2.jpg', name: 'Clothing Item 1', price:130 , filter:'Women', brand:'Gucci', category:'dress', size:'large'},
      { id: 8, image: '/clothing images/pic4.jpg', name: 'Clothing Item 2', filter:'Women', brand:'Gucci', category:'dress', size:'large'},
      { id: 9, image: '/clothing images/pic5.jpg', name: 'Clothing Item 3', price:130, filter:'Women', brand:'Gucci', category:'dress', size:'large'},
      { id: 10, image: '/clothing images/pic6.jpg', name: 'Clothing Item 3', price:130, filter:'Women', brand:'Gucci', category:'dress', size:'large'},
      { id: 11, image: '/clothing images/pic7.jpg', name: 'Clothing Item 3', price:250, filter:'Babies', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 12, image: '/clothing images/pic8.jpg', name: 'Clothing Item 3', price:250, filter:'Babies', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 13, image: '/clothing images/pic9.jpg', name: 'Clothing Item 3', price:250, filter:'Babies', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 14, image: '/clothing images/pic10.jpg', name: 'Clothing Item 3', price:250, filter:'Babies', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 15, image: '/clothing images/pic2.jpg', name: 'Clothing Item 3', price:250, filter:'Babies', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 16, image: '/clothing images/pic4.jpg', name: 'Clothing Item 3', price:250, filter:'Babies', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 17, image: '/clothing images/pic5.jpg', name: 'Clothing Item 3', price:250, filter:'Babies', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 18, image: '/clothing images/pic6.jpg', name: 'Clothing Item 3', price:250, filter:'Babies', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 19, image: '/clothing images/pic7.jpg', name: 'Clothing Item 3', price:250, filter:'Babies', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 20, image: '/clothing images/pic8.jpg', name: 'Clothing Item 3', price:250, filter:'Babies', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 32, image: '/clothing images/pic9.jpg', name: 'Clothing Item 3', price:250, filter:'Girls', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 33, image: '/clothing images/pic10.jpg', name: 'Clothing Item 3', price:250, filter:'Girls', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 34, image: '/clothing images/pic2.jpg', name: 'Clothing Item 3', price:250, filter:'Girls', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 35, image: '/clothing images/pic4.jpg', name: 'Clothing Item 3', price:250, filter:'Girls', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 36, image: '/clothing images/pic4.jpg', name: 'Clothing Item 3', price:250, filter:'Men', brand:'Zara', category:'Vintage', size:'Medium'},
    
      { id: 35, image: '/clothing images/pic6.jpg', name: 'Clothing Item 3', price:250, filter:'Girls', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 36, image: '/clothing images/pic7.jpg', name: 'Clothing Item 3', price:250, filter:'Men', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 37, image: '/clothing images/pic8.jpg', name: 'Clothing Item 3', price:250, filter:'Men', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 38, image: '/clothing images/pic3.jpg', name: 'Clothing Item 3', price:250, filter:'Men', brand:'Zara', category:'Vintage', size:'Medium'},
      { id: 39, image: '/clothing images/pic10.jpg', name: 'Clothing Item 3', price:250, filter:'Men', brand:'Zara', category:'Vintage', size:'Medium'},

    ],
  },
  reducers: {
    // You can add reducers to update the state here
  },
});

export const selectClothing = (state) => state.clothing;
export default clothingSlice.reducer;
