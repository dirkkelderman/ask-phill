import useGetAllProductColors from "../../lib/useGetAllProductColors";
import Multiselect from "multiselect-react-dropdown";
import React from "react";

interface ColorProps {
  colorChange: (colors: string[]) => void;
}

const ColorFilter = ({ colorChange }: ColorProps) => {
  const { allColors } = useGetAllProductColors();

  const onSelect = (
    selectedList: string[] | ((prevState: never[]) => never[])
  ) => {
    colorChange(selectedList as string[]);
  };

  const onRemove = (
    selectedList: string[] | ((prevState: never[]) => never[])
  ) => {
    colorChange(selectedList as string[]);
  };

  const removedNullColors = allColors?.data.filter(
    (product: object) => product !== null
  );

  return (
    <div>
      <h1>Color filters</h1>
      <Multiselect
        options={removedNullColors}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
      />
    </div>
  );
};

export default React.memo(ColorFilter);
