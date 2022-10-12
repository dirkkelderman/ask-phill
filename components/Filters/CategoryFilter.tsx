import useGetAllProductCategories from "../../lib/useGetAllProductCategories";
import Multiselect from "multiselect-react-dropdown";
import { Category, CategoryProps } from "../../interfaces/category";
import React from "react";

const CategoryFilter = ({ categoryChange }: CategoryProps) => {
  const { allCategories } = useGetAllProductCategories();

  const onSelect = (
    selectedList: string[] | ((prevState: never[]) => never[])
  ) => {
    categoryChange(selectedList as string[]);
  };

  const onRemove = (
    selectedList: string[] | ((prevState: never[]) => never[])
  ) => {
    categoryChange(selectedList as string[]);
  };
  const categoryOptions = allCategories?.data?.map((category: Category) => {
    if (category === null) {
      return {
        name: "New Arrivals",
      };
    } else {
      return {
        name: category,
      };
    }
  });

  return (
    <div>
      <h1>Category filters</h1>

      <Multiselect
        options={categoryOptions}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
      />
    </div>
  );
};

export default React.memo(CategoryFilter);
