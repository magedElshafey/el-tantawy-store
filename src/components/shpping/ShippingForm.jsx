import React, { useState } from "react";
import useTextInputValidation from "../../hooks/validation/useTextInputValidation";
import useNumberInput from "../../hooks/validation/useNumberInput";
import MainInput from "../common/inputs/MainInput";
import MainSelect from "../common/inputs/MainSelect";
import MainBtn from "../common/buttons/MainBtn";
import { useDispatch } from "react-redux";
import { addAddress, closeAddressesForm } from "../../store/shipping";
import Swal from "sweetalert2";
const ShippingForm = ({ inOverLay }) => {
  const dispatch = useDispatch();
  const {
    value: firstName,
    error: firstNameError,
    handleChange: handleFirstNameChange,
    setValue: setFirstName,
  } = useTextInputValidation();
  const {
    value: lastName,
    error: lastNameError,
    handleChange: handleLastNameChange,
    setValue: setLastName,
  } = useTextInputValidation();
  const {
    value: phone,
    error: phoneError,
    handleChange: handlePhoneChange,
    setValue: setPhone,
  } = useNumberInput();
  const [address, setAddress] = useState("");
  const handleAddressChange = (e) => setAddress(e.target.value);
  const [government, setGovernment] = useState("");
  const handleGovernmentChange = (opt) => setGovernment(opt?.id);
  const [city, setCity] = useState("");
  const handleCityChange = (opt) => setCity(opt.id);
  const governments = [
    {
      id: 1,
      name: "الدقهلية",
    },
    {
      id: 2,
      name: "الإسكندرية",
    },
    {
      id: 3,
      name: "القاهرة",
    },
    {
      id: 4,
      name: "الجيزة",
    },
    {
      id: 5,
      name: "أسوان",
    },
  ];
  const cities = [
    {
      id: 1,
      name: "طلخا",
    },
    {
      id: 2,
      name: "المنصورة",
    },
    {
      id: 3,
      name: "محطة الرمل",
    },
    {
      id: 4,
      name: "الخيرية",
    },
    {
      id: 5,
      name: "كيما",
    },
  ];
  const handleAddAddressClick = () => {
    if (
      !firstName.trim() &&
      !lastName.trim() &&
      !phone.trim() &&
      !government &&
      !city
    ) {
      Swal.fire({
        icon: "error",
        title: "جميع الحقول مطلوبة",
      });
      return;
    } else if (!firstName.trim()) {
      Swal.fire({
        icon: "error",
        title: "يرجي إدخال الاسم الأول",
      });
      return;
    } else if (!lastName.trim()) {
      Swal.fire({
        icon: "error",
        title: "يرجي إدخال الاسم الأخير",
      });
      return;
    } else if (!phone.trim()) {
      Swal.fire({
        icon: "error",
        title: "يرجي إدخال رقم الهاتف",
      });
      return;
    } else if (!government) {
      Swal.fire({
        icon: "error",
        title: "يرجي إدخال اسم المحافظة",
      });
      return;
    } else if (!city) {
      Swal.fire({
        icon: "error",
        title: "يرجي إدخال اسم المدينة",
      });
      return;
    } else if (firstNameError) {
      Swal.fire({
        icon: "error",
        title: firstNameError,
      });
      return;
    } else if (lastNameError) {
      Swal.fire({
        icon: "error",
        title: lastNameError,
      });
      return;
    } else if (phoneError) {
      Swal.fire({
        icon: "error",
        title: phoneError,
      });
      return;
    } else {
      const addressData = {
        id: new Date().getTime(),
        firstName,
        lastName,
        phone,
        government: governments?.find((item) => item.id === government)?.name,
        city: cities?.find((item) => item.id === city)?.name,
        address,
      };
      dispatch(addAddress(addressData));
      setFirstName("");
      setLastName("");
      setPhone("");
      setAddress("");
      setGovernment("");
      setCity("");
      if (inOverLay) {
        dispatch(closeAddressesForm());
      } else {
        return;
      }
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 lg:mb-8">
        <div>
          <MainInput
            type="text"
            label="first name"
            onChange={handleFirstNameChange}
            error={firstNameError}
            value={firstName}
          />
        </div>
        <div>
          <MainInput
            type="text"
            label="last name"
            error={lastNameError}
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <MainInput
            type="number"
            label="phone"
            value={phone}
            onChange={handlePhoneChange}
            error={phoneError}
          />
        </div>
        <div>
          <MainInput
            type="text"
            label="address street"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <MainSelect
            options={governments}
            value={governments?.find((item) => item?.id === government)?.name}
            onSelect={handleGovernmentChange}
            label="government name"
          />
        </div>
        <div>
          <MainSelect
            options={cities}
            value={cities?.find((item) => item?.id === city)?.name}
            onSelect={handleCityChange}
            label="city name"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[200px]">
          <MainBtn text="+ add address" action={handleAddAddressClick} />
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
