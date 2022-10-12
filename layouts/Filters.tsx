import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  CategoryFilter,
  ColorFilter,
  PriceFilter,
} from "../components/Filters";

const Filters = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [colors, setColors] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [pricing, setPricing] = useState<string[]>([]);
  const router = useRouter();

  const { query } = router;

  useEffect(() => {
    if (query.page) {
      const pageNumber = Number(query.page) >= 1 ? query.page : 1;
      setCurrentPage(Number(pageNumber));
    }

    if (query.limit) {
      const limitNumber = Number(query.limit) >= 10 ? query.limit : 10;
      setLimit(Number(limitNumber));
    }

    if (query.color) {
      const colorArray = (query.color as string).split(",");
      setColors(colorArray);
    }

    if (query.category) {
      const categoryArray = (query.category as string).split(",");
      setCategories(categoryArray);
    }

    if (query.price) {
      const priceArray = (query.price as string ).split("-");
      setPricing(priceArray);
    }
  }, [query.page, query.limit, query.color, query.category, query.price]);

  const handleColorFilter = (selectedColors: any) => {
    const selectedColorArray = selectedColors.map((color: any) => color.name);

    router.replace(
      `/?page=${currentPage}&limit=${limit}&color=${selectedColorArray}&price=${pricing}`
    );
  };

  const handleCategoryFilter = (categories: any) => {
    const selectedCategoriesArray = categories.map(
      (category: any) => category.name
    );

    router.replace(
      `/?page=${currentPage}&limit=${limit}&color=${colors}&category=${selectedCategoriesArray}&price=${pricing}`
    );
  };

  const handlePriceFilter = (selectedPrice: any) => {
    const selectedPriceArray = selectedPrice.map((price: any) => price.name);

    router.replace(
      `/?page=${currentPage}&limit=${limit}&color=${colors}&category=${categories}&price=${selectedPriceArray}`
    );
  };

  const handlePagination = (pageIndex: number) => {
    const page = pageIndex >= 1 ? pageIndex : 1;
    router.replace(
      `/?page=${page}&limit=${limit}&color=${colors}&category=${categories}&price=${pricing}`
    );
  };

  const handleLimitChange = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const { value } = e.target;
    setLimit(value);
    router.replace(
      `/?page=${currentPage}&limit=${value}&color=${colors}&category=${categories}`
    );
  };

  return (
    <header className="w-full">
      <div className="flex flex-col justify-center ">
        <div>
          <CategoryFilter categoryChange={handleCategoryFilter} />
          <ColorFilter colorChange={handleColorFilter} />
          <PriceFilter priceChange={handlePriceFilter} />
        </div>
        <div className="flex justify-center p-4">
          <button
            className="px-4 py-2 text-sm font-medium  bg-slate-300 rounded-md hover:bg-blue-600 hover:text-white "
            type="button"
            onClick={() => handlePagination(currentPage - 1)}
          >
            Prev page
          </button>
          <span className="px-4 py-2 text-sm font-medium rounded-full bg-slate-300 mx-4">
            {currentPage}
          </span>
          <button
            className="px-4 py-2 text-sm font-medium  bg-slate-300 rounded-md hover:bg-blue-600 hover:text-white "
            type="button"
            onClick={() => handlePagination(currentPage + 1)}
          >
            Next page
          </button>
          <label className="px-4 py-2 text-sm font-medium  bg-slate-300 rounded-md hover:bg-blue-600 hover:text-white ml-4">
            Limit
            <select
              value={limit}
              onChange={handleLimitChange}
              className="px-4 text-sm font-medium  bg-slate-300 rounded-md hover:bg-blue-600 hover:text-white "
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Filters;
