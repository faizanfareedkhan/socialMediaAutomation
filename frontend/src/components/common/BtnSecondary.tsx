type ButtonProps = {
  name: string;
  className?: string;
};

const BtnSecondary: React.FC<ButtonProps> = ({ name, className = "" }) => {
  return (
    <button
      className={`bg-[var(--brand-color)]  [var(--contrast-color) hover:bg-[var(--contrast-color)]  hover:text-[var(--brand-color)]  border-[var(--contrast-color)]  hover:border-[var(--brand-color)]  border transition-colors duration-300 ${className}`}
    >
      {name}
    </button>
  );
};

export default BtnSecondary;
