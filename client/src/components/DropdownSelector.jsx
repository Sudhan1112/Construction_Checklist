import React from "react";
import {unitOptions} from "../constants/dropdownOptions"

function DropdownSelector({value, onChange}) {

    return(
        <>
        <select value={value} onChange={(e) => onChange(e.target.value)} className="border border-gray-300 p-2 rounded-md bg-white">
            <option value="">Select Unit</option>
            {unitOptions.map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
            ))}
        </select>
        </>
    )
}

export default DropdownSelector;