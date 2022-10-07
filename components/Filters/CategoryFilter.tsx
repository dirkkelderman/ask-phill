import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategories: number[];
  onCategoryChange: (categories: number[]) => void;
}

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  // const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // useEffect(() => {
  //     const fetchCategories = async () => {
  //     const response = await fetch('/api/categories');
  //     const categories = await response.json();
  //     setCategories(categories);
  //     };

  //     fetchCategories();
  // }, []);

  const handleCategoryChange = (e: { target: { value: any } }) => {
    // const valueArray = [];
    const { value } = e.target;

    // valueArray.push(...selectedCategories, value);

    setSelectedCategories(value);

    // const value = Array.from(e.target.value, (option) => option.value);
    // setSelectedCategories(value);
    console.log(selectedCategories);
  };

  return (
    <div>
      <label htmlFor="categories">Categories</label>
      <select
        id="categories"
        name="categories"
        value={selectedCategories}
        onChange={handleCategoryChange}
      >
        {/* {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))} */}
        <option value="all">All</option>
        <option value="none">None</option>
        <option value="nike">Nike</option>
      </select>
      <label>
        <input type="checkbox" checked={selectedCategories} onChange={handleCategoryChange} />
        Nike
      </label>
      <label>
        <input type="checkbox" checked={selectedCategories} onChange={handleCategoryChange} />
        Adidas
      </label>
    </div>
  );
};

export default CategoryFilter;
