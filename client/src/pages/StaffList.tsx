// src/pages/StaffList.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Staff {
  id: number;
  name: string;
}

const StaffList: React.FC = () => {
  const { service } = useParams<{ service: string }>();
  const navigate = useNavigate();
  const [staff, setStaff] = useState<Staff[]>([]);

  useEffect(() => {
    // Үйлчилгээний төрлөөс хамааран ажилтнуудыг татах
    // Жишээ өгөгдөл:
    const staffData = {
      hair: [
        { id: 1, name: "Анхаа" },
        { id: 2, name: "Батаа" },
      ],
      beauty: [
        { id: 3, name: "Цэцгээ" },
        { id: 4, name: "Должин" },
      ],
      manicure: [
        { id: 5, name: "Энхээ" },
        { id: 6, name: "Баярмаа" },
      ],
    };
    setStaff(staffData[service as keyof typeof staffData] || []);
  }, [service]);

  const handleStaffSelect = (staffId: number) => {
    navigate(`/booking/${staffId}`);
  };

  return (
    <div>
      <h2>Ажилтнаас сонгоно уу</h2>
      {staff.map((person) => (
        <button key={person.id} onClick={() => handleStaffSelect(person.id)}>
          {person.name}
        </button>
      ))}
    </div>
  );
};

export default StaffList;
