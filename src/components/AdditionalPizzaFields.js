import React from 'react'

const AdditionalPizzaFields = (props) => {
    return (
        <div>
            <label htmlFor="no_of_slice">Number of slices:
                <input
                    id="no_of_slice"
                    name="no_of_slice"
                    type="number"
                    min="1"
                    max="8"
                    onChange={(e) => props.onNoOfSliceChange(e, "no_of_slice")}
                />
            </label>
            <label htmlFor="diameter">Diameter:
                <select
                    id="diameter"
                    onChange={(e) => props.onDiameterChange(e, "diameter")}
                >
                    <option value="" placeholder="Select type"/>
                    <option value="30">30 cm</option>
                    <option value="40">40 cm</option>
                    <option value="50">50 cm</option>
                </select>
            </label>
        </div>
    )
};

export default AdditionalPizzaFields
