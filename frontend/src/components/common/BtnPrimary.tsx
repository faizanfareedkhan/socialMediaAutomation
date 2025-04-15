type ButtonProps = {
  name: string;
  className?: string;
};

const BtnPrimary: React.FC<ButtonProps> = ({ name, className = "" }) => {
  return (
    <button
      className={`border-secondary text-secondary hover:bg-secondary hover:text-primary border transition-colors duration-300 ${className}`}
    >
      {name}
    </button>
  );
};

export default BtnPrimary;
