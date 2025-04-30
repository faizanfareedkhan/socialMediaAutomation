type ButtonProps = {
  name: string;
  className?: string;
};

const BtnSecondary: React.FC<ButtonProps> = ({ name, className = "" }) => {
  return (
    <button
      className={`bg-brand hover:text-brand border-contrast hover:border-brand border text-[var(--contrast-color)] transition-colors duration-300 hover:bg-[var(--contrast-color)] ${className}`}
    >
      {name}
    </button>
  );
};

export default BtnSecondary;
