import React, { useState } from "react";
import './MultiRange.css';
import MultiRangeSlider from "multi-range-slider-react";

function MultiRnage() {
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    
    return(
        <div class="multi-range-slider-container">
            <div className="range">
                <MultiRangeSlider
                    min={0}
                    max={400}
                    step={1}
                    minValue={minValue}
                    maxValue={maxValue}
                    barInnerColor= "rgb(48, 203, 112, 1)"
                    onInput={(e) => {
                        handleInput(e);
                    }}
                    ruler={false}
                    label={false}
                />
            </div>
        </div>
    );
}
export default MultiRnage;