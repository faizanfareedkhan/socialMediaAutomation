type ButtonProps = {
  name: string;
  className?: string;
};

const BtnSecondary: React.FC<ButtonProps> = ({ name, className = "" }) => {
  return (
    <button
      className={`bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary border-secondary hover:border-tertiary border transition-colors duration-300 ${className}`}
    >
      {name}
    </button>
  );
};

export default BtnSecondary;
