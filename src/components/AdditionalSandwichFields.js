import React from 'react'

const AdditionalSandwichFields = (props) => {
    return (
        <div>
            <label htmlFor="slices_of_bread">Number of slices:
                <input
                    id="slices_of_bread"
                    name="slices_of_bread"
                    type="number"
                    min="1"
                    max="5"
                    onChange={(e) => props.onSlicesOfBreadChange(e, "slices_of_bread")}
                />
            </label>
        </div>
    )
};

export default AdditionalSandwichFields
