// src/pages/Services.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceSelect = (service: string) => {
    navigate(`/staff/${service}`);
  };

  return (
    <div>
      <h1>Үйлчилгээнээс сонгоно уу</h1>
      <button onClick={() => handleServiceSelect("hair")}>Үс засалт</button>
      <button onClick={() => handleServiceSelect("beauty")}>Гоо сайхан</button>
      <button onClick={() => handleServiceSelect("manicure")}>Маникюр</button>
    </div>
  );
};

export default Services;
