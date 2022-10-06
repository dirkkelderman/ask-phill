import { ButtonProps } from "../interfaces/button";

const Button = ({ children, onClick, className, type }: ButtonProps) => {
  return <button onClick={onClick} className={className} type={type}>{children}</button>;
};

export default Button;
