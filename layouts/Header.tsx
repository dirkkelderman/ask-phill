import { useState } from "react";
import { useRouter } from "next/router";
import { CategoryFilter, ColorFilter, PriceFilter } from "../components/Filters";

const Header = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const router = useRouter();

  const handlePagination = (pageIndex: number) => {
    let p = pageIndex >= 1 ? pageIndex : 1;
    router.replace(`/?page=${p}&limit=${limit}`);
  };

  const handleLimitChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setLimit(value);
    router.replace(`/?page=${currentPage}&limit=${value}`);
  };

  return (
    <header className="w-full">
      <div className="flex flex-col justify-center ">
        <div>
          <CategoryFilter categories={[]} selectedCategories={[]} onCategoryChange={function (categories: number[]): void {
                      throw new Error("Function not implemented.");
                  } } />
          <ColorFilter />
          <PriceFilter />
        </div>
        <div className="flex justify-around p-4">
          <button type="button" onClick={() => setPageIndex(pageIndex - 1)}>
            Prev page
          </button>
          {currentPage}
          <button type="button" onClick={() => setPageIndex(pageIndex + 1)}>
            Next page
          </button>
          <label>
            Limit
            {/* <input type="number" value={limit} onChange={(e) => setLimit(parseInt(e.target.value))} /> */}
            <select value={limit} onChange={handleLimitChange}>
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

export default Header;
