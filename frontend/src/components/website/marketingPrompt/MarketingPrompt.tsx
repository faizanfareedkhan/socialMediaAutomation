import image from "../../../../public/marketingPrompt/63f3ab714bb54bd85c2afa8c_Social Media had changed_7-min-p-2000.png";

const MarketingPrompt = () => {
  return (
    <div className="flex bg-white justify-center p-6 text-black items-center min-h-screen">
      <div className="border p-10 rounded-3xl shadow-2xl text-center w-full max-w-6xl space-y-6">
        <h1 className="text-4xl font-extrabold md:text-5xl tracking-wide">
          Social media has changed. Have you?
        </h1>
        <p className="text-black text-lg  mt-4 ">
          Forget Photoshop. Discover thousands of image or video templates.
          Create manually within our dashboard or automatically - all powered by
          our AI.
        </p>
        <div className="flex  justify-center w-full ">
          <img
            className="h-full rounded-2xl  w-full object-cover"
            src={image}
            alt="demo"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingPrompt;
