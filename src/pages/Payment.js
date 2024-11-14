import SingleBanner from "../components/common/banners/SingleBanner";
import banner from "../assets/0 وسيلة الدفع.png";
import CartCheck from "../components/cart/CartCheck";
import { useSelector } from "react-redux";
const Payment = () => {
  const { cartItems } = useSelector((state) => state.cartSlice);
  const totalPrice = cartItems.reduce((acc, product) => {
    acc += product.hasOffer
      ? +product.offer?.priceAfterDiscount * +product.quantity
      : product.discount
      ? +product.price_after_discount * +product.quantity
      : +product.price * +product.quantity;
    return acc;
  }, 0);
  return (
    <div>
      <SingleBanner src={banner} alt="payment-methods" />
      <div className="container mt-4 mb-4 md:mb-6 lg:mt-8 xl:mt-12">
        <div className="w-full flex gap-4 md:gap-6 lg:gap-8 flex-col md:flex-row">
          <div className="w-full md:w-3/4"></div>
          <div className="w-full md:w-1/4">
            <CartCheck totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
