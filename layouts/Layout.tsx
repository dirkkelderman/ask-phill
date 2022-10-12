import { LayoutProps } from "../interfaces/layout";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto">
      <main className="col-auto flex flex-col justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
