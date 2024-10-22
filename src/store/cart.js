// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-hot-toast";
// const initialState = {
//   cartItems: JSON.parse(window.localStorage.getItem("cart")) || [],
//   isCartOpen: false,
// };
// const cartSlice = createSlice({
//   initialState,
//   name: "cartSlice",
//   reducers: {
//     // open cart
//     openCart: (state) => {
//       state.isCartOpen = true;
//     },
//     // close cart
//     closeCart: (state) => {
//       state.isCartOpen = false;
//     },
//     // add to cart
//     addToCart: (state, action) => {
//       const { id, selectedColor } = action.payload;
//       const index = state.cartItems.findIndex(
//         (item) => item.id === id && item.selectedColor.id === selectedColor.id
//       );

//       if (index >= 0) {
//         state.cartItems[index].quantity++;
//         toast.success(`${action.payload.name} QTY Increased`);
//       } else {
//         const temp = { ...action.payload, quantity: 1 };
//         state.cartItems.push(temp);
//         toast.success(`${action.payload.name} تم اضافتة للعربة`);
//       }
//       window.localStorage.setItem("cart", JSON.stringify(state.cartItems));
//     },
//     // remove from cart :
//     removeFromCart: (state, action) => {
//       const { id, selectedColor } = action.payload;
//       // const newItems = state.cartItems.filter(
//       //   (item) => item.id !== action.payload.id
//       // );
//       const newItems = state.cartItems.filter(
//         (item) =>
//           !(item.id === id && item.selectedColor.id === selectedColor.id)
//       );
//       state.cartItems = newItems;
//       toast.success(`${action.payload.name} تم حذفة من العربة`);
//       window.localStorage.setItem("cart", JSON.stringify(state.cartItems));
//     },
//     // increase Quantity
//     increaseQTY: (state, action) => {
//       const { id, selectedColor } = action.payload;
//       // const index = state.cartItems.findIndex(
//       //   (item) => item.id === action.payload.id
//       // );
//       const index = state.cartItems.findIndex(
//         (item) => item.id === id && item.selectedColor.id === selectedColor.id
//       );
//       if (index >= 0) {
//         state.cartItems[index].quantity++;
//         toast.success(`${action.payload.name} تم زيادة كميته`);
//       }
//     },
//     // decrease QTY
//     decreaseQTY: (state, action) => {
//       const { id, selectedColor } = action.payload;

//       const index = state.cartItems.findIndex(
//         (item) => item.id === id && item.selectedColor.id === selectedColor.id
//       );
//       if (index >= 0) {
//         if (state.cartItems[index].quantity > 1) {
//           state.cartItems[index].quantity -= 1;
//           toast.success(`${action.payload.name} تم انقاص`);
//         }
//       }
//     },
//     // clear
//     clearCart: (state) => {
//       state.cartItems = [];
//       window.localStorage.setItem("cart", state.cartItems);
//       toast.success("تم تفريغ العربة بنجاح");
//     },
//   },
// });
// export const {
//   openCart,
//   closeCart,
//   addToCart,
//   removeFromCart,
//   increaseQTY,
//   decreaseQTY,
//   clearCart,
// } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
// Initial state
const initialState = {
  cartItems: JSON.parse(window.localStorage.getItem("cart")) || [],
  isCartOpen: false,
};

// Cart slice
const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    // Open cart
    openCart: (state) => {
      state.isCartOpen = true;
    },
    // Close cart
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    // Add to cart
    addToCart: (state, action) => {
      const { id, selectedColor, colors, name, image } = action.payload;

      // Check if product has multiple colors and no color is selected
      if (colors && colors.length > 1 && !selectedColor) {
        Swal.fire({
          icon: "error",
          position: "top-left",
          title: "يرجى اختيار اللون أولا!",
        });

        return;
      }

      // Find if the item already exists in cart with the same color (or no color)
      const index = state.cartItems.findIndex(
        (item) =>
          item.id === id &&
          (!colors.length || item.selectedColor?.id === selectedColor?.id)
      );

      if (index >= 0) {
        // If item exists, increase quantity
        state.cartItems[index].quantity++;
        Swal.fire({
          icon: "success",
          position: "top-left",
          title: `${name} QTY Increased`,
        });
      } else {
        // If item doesn't exist, add to cart
        const temp = { ...action.payload, quantity: 1 };
        state.cartItems.push(temp);
        Swal.fire({
          icon: "success",
          position: "top-left",
          title: `${name} تم اضافته للعربة`,
        });
      }

      // Update localStorage
      window.localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // Remove from cart
    removeFromCart: (state, action) => {
      const { id, selectedColor, name } = action.payload;

      const newItems = state.cartItems.filter(
        (item) =>
          !(item.id === id && item.selectedColor?.id === selectedColor?.id)
      );
      state.cartItems = newItems;
      Swal.fire({
        icon: "success",
        position: "top-left",
        title: `${name} تم حذفه من العربة`,
      });
      window.localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // Increase quantity
    increaseQTY: (state, action) => {
      const { id, selectedColor, name } = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.id === id && item.selectedColor?.id === selectedColor?.id
      );
      if (index >= 0) {
        state.cartItems[index].quantity++;
        Swal.fire({
          icon: "success",
          position: "top-left",
          title: `${name} تم زيادة كميته`,
        });
      }
    },
    // Decrease quantity
    decreaseQTY: (state, action) => {
      const { id, selectedColor, name } = action.payload;

      const index = state.cartItems.findIndex(
        (item) => item.id === id && item.selectedColor?.id === selectedColor?.id
      );
      if (index >= 0) {
        if (state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity -= 1;
          Swal.fire({
            icon: "success",
            position: "top-left",
            title: `${name} تم انقاص كميته`,
          });
        }
      }
    },
    // Clear cart
    clearCart: (state) => {
      state.cartItems = [];
      window.localStorage.setItem("cart", JSON.stringify(state.cartItems));
      Swal.fire({
        icon: "success",
        position: "top-left",
        title: "تم تفريغ العربة بنجاح",
      });
    },
  },
});

// Animation function to animate the product image to the cart icon
function animateAddToCart(imageSrc) {
  const productImage = document.createElement("img");
  productImage.src = imageSrc;
  productImage.classList.add("animate-to-cart");

  document.body.appendChild(productImage);

  const cartIcon = document.querySelector("#cart-icon");

  const cartIconRect = cartIcon.getBoundingClientRect();
  const productImageRect = productImage.getBoundingClientRect();

  const deltaX = cartIconRect.x - productImageRect.x;
  const deltaY = cartIconRect.y - productImageRect.y;

  productImage.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.1)`;
  productImage.style.transition = "transform 0.75s ease";
  window.scrollTo({
    top: 0,
    left: 0,
  });
  setTimeout(() => {
    productImage.remove();
  }, 750);
}

export const {
  openCart,
  closeCart,
  addToCart,
  removeFromCart,
  increaseQTY,
  decreaseQTY,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
