type ButtonProps = {
  name: string;
  className?: string;
};

const BtnPrimary: React.FC<ButtonProps> = ({ name, className = "" }) => {
  return (
    <button
      className={`border-contrast text-contrast hover:bg-contrast hover:text-base border transition-colors duration-300 ${className}`}
    >
      {name}
    </button>
  );
};

export default BtnPrimary;
