type ButtonProps = {
  name: string;
  className?: string;
};

const BtnSecondary: React.FC<ButtonProps> = ({ name, className = "" }) => {
  return (
    <button
      className={`bg-brand text-contrast hover:bg-contrast hover:text-brand border-contrast hover:border-brand border transition-colors duration-300 ${className}`}
    >
      {name}
    </button>
  );
};

export default BtnSecondary;
