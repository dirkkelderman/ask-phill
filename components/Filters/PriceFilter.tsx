import { useState } from "react";

const priceData = [
  { label: "Under 25", value: "0-25" },
  { label: "25 to 50", value: "25-50" },
  { label: "50 to 100", value: "50-100" },
  { label: "100 to 200", value: "100-200" },
  { label: "Over 200", value: "200-1000" },
];

const PriceFilter = ({ priceChange }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(priceData?.length).fill(false)
  );

  const handlePriceChange = (position: number, value) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    priceChange(value);
  };

  return (
    <div>
      <h1>PriceFilter</h1>

      {priceData.map((price, index) => {
        return (
          <label key={price.value}>
            <input
              type="checkbox"
              name={price.value}
              value={price.value}
              checked={checkedState[index]}
              onChange={() => handlePriceChange(index, price.value)}
            />
            {price.label}
          </label>
        );
      })}
    </div>
  );
};

export default PriceFilter;
