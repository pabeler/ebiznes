import React, { useState } from "react";
import "./MultiRange.css";
import MultiRangeSlider from "multi-range-slider-react";

function MultiRange({ minPrice, maxPrice, onPriceChange }) {
  const [minValue, set_minValue] = useState(minPrice);
  const [maxValue, set_maxValue] = useState(maxPrice);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
    onPriceChange(e.minValue, e.maxValue);
  };

  return (
    <div class="multi-range-slider-container">
      <div className="range">
        <MultiRangeSlider
          min={0}
          max={200}
          step={1}
          minValue={minValue}
          maxValue={maxValue}
          barInnerColor="rgb(48, 203, 112, 1)"
          onInput={handleInput}
          ruler={false}
          label={false}
        />
      </div>
    </div>
  );
}
export default MultiRange;
