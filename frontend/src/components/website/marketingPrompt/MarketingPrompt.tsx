const MarketingPrompt = () => {
  return (
    <div className="flex bg-white justify-center p-6 text-black items-center min-h-screen">
      <div className="border p-10 rounded-3xl shadow-2xl text-center w-full max-w-6xl space-y-6">
        <h1 className="text-4xl font-extrabold md:text-5xl tracking-wide">
          Social media has evolved. Have you kept up?
        </h1>
        <p className="text-black text-lg  mt-4 ">
          Say goodbye to Photoshop! Explore thousands of image and video
          templates. Create manually in our dashboard or let AI do it for you.
        </p>
        <div className="flex  justify-center w-full ">
          <img
            className="h-full rounded-2xl  w-full object-cover"
            src="/marketingPrompt/63f3ab714bb54bd85c2afa8c_Social Media had changed_7-min-p-2000.png"
            alt="demo"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingPrompt;
