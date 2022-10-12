export interface Category {
  id: number;
  name: string;
}

export interface CategoryProps {
  categoryChange: (colors: string[]) => void;
}
