import React, { useState } from 'react';

const CarSelectionComponent = () => {
    // Danh sách các xe và màu sắc
  const carList = ["Car1", "Car2", "Car3"]; // Thay bằng danh sách các xe thực tế
  const colorList = ["Red", "Blue", "Green"]; // Thay bằng danh sách các màu sắc thực tế

  // Khai báo và khởi tạo selectedCar và setSelectedCar với giá trị mặc định
  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0],
  });

  // Xử lý sự kiện khi chọn xe
  const handleCarChange = (event) => {
    setSelectedCar({ ...selectedCar, car: event.target.value });
  };

  // Xử lý sự kiện khi chọn màu sắc
  const handleColorChange = (event) => {
    setSelectedCar({ ...selectedCar, color: event.target.value });
  };

  return (
    <div>
      {/* Dropdown cho việc chọn xe */}
      <label>Choose a car:</label>
      <select value={selectedCar.car} onChange={handleCarChange}>
        {carList.map((car, index) => (
          <option key={index} value={car}>{car}</option>
        ))}
      </select>

      {/* Dropdown cho việc chọn màu sắc */}
      <label>Choose a color:</label>
      <select value={selectedCar.color} onChange={handleColorChange}>
        {colorList.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
      </select>

      {/* Hiển thị thông tin về xe đã chọn */}
      <p>Selected Car: {selectedCar.car}</p>
      <p>Selected Color: {selectedCar.color}</p>
    </div>
  );
}

export default CarSelectionComponent;
