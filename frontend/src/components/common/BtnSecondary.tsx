type ButtonProps = {
  name: string;
  className?: string;
};

const BtnSecondary: React.FC<ButtonProps> = ({ name, className = "" }) => {
  return (
    <button
      className={`bg-accent text-contrast hover:bg-contrast hover:text-accent border-contrast hover:border-accent border transition-colors duration-300 ${className}`}
    >
      {name}
    </button>
  );
};

export default BtnSecondary;
