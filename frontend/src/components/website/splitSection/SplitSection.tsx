interface SplitSectionProps {
  imageSrc: string;
  title: string;
  description: string;
  reverse: boolean;
  btn?: boolean;
  btnText?: string; // Added button text prop (optional)
}

const SplitSection: React.FC<SplitSectionProps> = ({
  imageSrc,
  title,
  description,
  reverse,
  btn,
  btnText,
}) => {
  return (
    <section className="w-full bg-white text-black py-12 px-6 container mx-auto flex justify-center items-center">
      <div
        className={`flex flex-col ${
          reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        } items-center gap-6 md:gap-12 px-12 md:px-20 lg:px-32`}
      >
        {/* Image Section */}
        <div className="w-4/5 md:w-1/2 lg:w-2/5 h-auto">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg">{description}</p>

          {/* Button Section (Now Left Aligned) */}
          {btn && btnText && (
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start max-w-2xl tracking-wide space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
              <button className="bg-black rounded-full cursor-pointer text-lg text-white font-semibold hover:bg-gray-900 w-full sm:w-auto px-6 py-3 transition">
                {btnText}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
