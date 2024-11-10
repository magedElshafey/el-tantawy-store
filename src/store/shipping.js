import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const initialState = {
  addresses: JSON.parse(window.localStorage.getItem("addresses")) || [],
  isAddressesFormOpen: false,
};
const shippingSlice = createSlice({
  initialState,
  name: "shippingSlice",
  reducers: {
    openAddressForm: (state) => {
      state.isAddressesFormOpen = true;
    },
    closeAddressesForm: (state) => {
      state.isAddressesFormOpen = false;
    },
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
      window.localStorage.setItem("addresses", JSON.stringify(state.addresses));
      Swal.fire({
        icon: "success",
        title: "تم إضافة العنوان بنجاح",
      });
    },
    removeAddress: (state, action) => {
      const newAddressess = state.addresses.filter(
        (item) => item?.id !== action?.payload?.id
      );
      state.addresses = newAddressess;
      window.localStorage.setItem("addresses", JSON.stringify(state.addresses));
      Swal.fire({
        icon: "success",
        title: "تم حذف العنوان بنجاح",
      });
    },
    editAddress: (state, action) => {
      const { id, newAddressData } = action.payload;
      const addressIndex = state.addresses.findIndex(
        (address) => address.id === id
      );

      if (addressIndex !== -1) {
        // تحديث العنوان في `addresses`
        state.addresses[addressIndex] = {
          ...state.addresses[addressIndex],
          ...newAddressData,
        };

        // تحديث البيانات في `localStorage`
        window.localStorage.setItem(
          "addresses",
          JSON.stringify(state.addresses)
        );

        // عرض رسالة نجاح
        Swal.fire({
          icon: "success",
          title: "تم تعديل العنوان بنجاح",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "لم يتم العثور على العنوان",
        });
      }
    },
  },
});
export const {
  openAddressForm,
  closeAddressesForm,
  removeAddress,
  editAddress,
  addAddress,
} = shippingSlice.actions;

export default shippingSlice.reducer;
