// src/hooks/useNumberInput.js

import { useState } from "react";
import { useTranslation } from "react-i18next";
const useNumberInput = (initialValue = "") => {
  const { t } = useTranslation();
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    const regex = /^[0-9]+$/;
    if (newValue === "") {
      setError("");
    } else if (!regex.test(newValue)) {
      setError(t("Please enter numbers only"));
    } else if (newValue.trim().length < 11) {
      setError(t("not valid phone number"));
    } else {
      setError("");
    }
  };

  return { value, error, handleChange, setValue };
};

export default useNumberInput;
