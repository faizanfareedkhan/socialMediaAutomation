type ButtonProps = {
  name: string;
  className?: string;
};

const BtnPrimary: React.FC<ButtonProps> = ({ name, className = "" }) => {
  return (
    <button
      className={`border-contrast border text-[var(--contrast-color)] transition-colors duration-300 hover:bg-[var(--contrast-color)] hover:text-base ${className}`}
    >
      {name}
    </button>
  );
};

export default BtnPrimary;
