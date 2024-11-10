import React, { useState } from "react";

const EmployeeLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Логины дараах үйлдэл
    console.log("Ажилтан нэвтэрлээ:", username);
  };

  return (
    <div>
      <h2>Ажилтны нэвтрэх</h2>
      <input
        type="text"
        value={username}
        placeholder="Нэвтрэх нэр"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Нууц үг"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Нэвтрэх</button>
    </div>
  );
};

export default EmployeeLogin;
