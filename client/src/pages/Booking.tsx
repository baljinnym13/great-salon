// src/pages/Booking.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Booking: React.FC = () => {
  const { staffId } = useParams<{ staffId: string }>();
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  useEffect(() => {
    // Жишээ өгөгдөл: Ажилтны сул цагууд
    const scheduleData: Record<number, string[]> = {
      1: ["10:00", "11:00", "14:00"],
      2: ["09:00", "12:00", "15:00"],
      3: ["10:00", "13:00", "16:00"],
    };

    setAvailableTimes(scheduleData[Number(staffId)] || []);
  }, [staffId]);

  const handleTimeSelect = (time: string) => {
    alert(`Захиалга үүсгэгдлээ! Ажилтанд мэдэгдэл очих болно.`);
  };

  return (
    <div>
      <h3>Сул цагуудаас сонгоно уу</h3>
      {availableTimes.map((time) => (
        <button key={time} onClick={() => handleTimeSelect(time)}>
          {time}
        </button>
      ))}
    </div>
  );
};

export default Booking;
