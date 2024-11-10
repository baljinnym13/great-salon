import React, { useState } from "react";

const AddService: React.FC = () => {
  const [serviceName, setServiceName] = useState("");
  const [staffList, setStaffList] = useState<number[]>([]);

  const handleServiceSubmit = () => {
    // Үйлчилгээ нэмэх үйлдэл
    console.log("Service added:", serviceName);
    console.log("Associated staff:", staffList);
  };

  return (
    <div>
      <h2>Үйлчилгээ нэмэх</h2>
      <input
        type="text"
        placeholder="Үйлчилгээний нэр"
        value={serviceName}
        onChange={(e) => setServiceName(e.target.value)}
      />
      <div>
        <h3>Ажилтнууд сонгох:</h3>
        <input
          type="checkbox"
          value="1"
          onChange={() => setStaffList([1])}
        />{" "}
        Анхаа
        <input
          type="checkbox"
          value="2"
          onChange={() => setStaffList([2])}
        />{" "}
        Батаа
      </div>
      <button onClick={handleServiceSubmit}>Үйлчилгээ нэмэх</button>
    </div>
  );
};

export default AddService;
