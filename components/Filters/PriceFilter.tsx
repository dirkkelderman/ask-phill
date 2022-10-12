import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { PriceProps } from "../../interfaces/price";

const priceData = [
  { name: "25" },
  { name: "50" },
  { name: "100" },
  { name: "200" },
  { name: "1000" },
];

const PriceFilter = ({ priceChange }: PriceProps) => {
  const onSelect = (
    selectedList: string[] | ((prevState: never[]) => never[])
  ) => {
    priceChange(selectedList as string[]);
  };

  const onRemove = (
    selectedList: string[] | ((prevState: never[]) => never[])
  ) => {
    priceChange(selectedList as string[]);
  };

  return (
    <div>
      <h1>Max price filter</h1>

      <Multiselect
        options={priceData}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
      />
    </div>
  );
};

export default PriceFilter;
