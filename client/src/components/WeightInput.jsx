import React from "react";

function WeightInput({value, onChange}) {

   const getInputStyle = () => {
    if(value === 0) return "border-gray-300";
    if(value === 100) return "border-green-500";
    return "border-blue-500";
   }

   const handleChange = (e) => {
    const newValue = Number(e.target.value);

    if(newValue < 0 || newValue > 100) return;

    onChange(newValue);
   }
    return(
        <>
        <div className="flex items-center">
            <input type="number" value={value} min="0" max="100" onChange={handleChange} className={`border p-2 w-20 ${getInputStyle()}`} placeholder="Weight" />
            <span className="ml-1 text-gray-700">%</span> 
        </div>
        </>
    )
}

export default WeightInput;