import React, { useState } from "react";

const AddEmployee: React.FC = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  const handleSubmit = () => {
    // Ажилтан нэмэх логик энд орно
    console.log("Employee added:", name, bio, availableTimes);
  };

  return (
    <div>
      <h2>Ажилтан нэмэх</h2>
      <input
        type="text"
        placeholder="Нэр"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Биографи"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <input
        type="text"
        placeholder="Сул цаг нэмэх (жишээ: 10:00-12:00)"
        onChange={(e) => setAvailableTimes(e.target.value.split(","))}
      />
      <button onClick={handleSubmit}>Ажилтан нэмэх</button>
    </div>
  );
};

export default AddEmployee;
