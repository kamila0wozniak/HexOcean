import React from 'react'

const AdditionalSoupFields = (props) => {

    return (
        <div>
            <label htmlFor="spiciness_scale">Spiciness Scale:
                <input
                    id="spiciness_scale"
                    name="spiciness_scale"
                    type="number"
                    min="1"
                    max="10"
                    onChange={(e) => props.onSpicinessScaleChange(e, "spiciness_scale")}
                />
            </label>
        </div>
    )
};

export default AdditionalSoupFields
