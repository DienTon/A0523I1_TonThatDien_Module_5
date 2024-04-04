import react, { useState} from 'react';

function CarSelection(){
    const carList = ["mec","vin","maybach"];
    const colorList = ["red","black","blue"];
    const [selectedCar, setSelectedCar] = useState({
        car: carList[0],
        color: colorList[0]
    });

    const handleCarChange = (event) => {
        setSelectedCar({...selectedCar,car: event.target.value});
    };

    const handleColorChange = (event) => {
        setSelectedCar({...selectedCar,color: event.target.value});
    };

    return (
        <div>
            <h1>Car Selection</h1>
            <select value={selectedCar.car} onChange={handleCarChange}>
                {carList.map((car,index) => (
                    <option key={index} value={car}>{car}</option>
                ))}
            </select>
            <select value={selectedCar.color} onChange={handleColorChange}>
                {colorList.map((color, index) => (
                    <option key={index} value={color}>{color}</option>
                ))}
            </select>
            <p>You select a {selectedCar.color} - {selectedCar.car}</p>
        </div>
    );
}
export default CarSelection;