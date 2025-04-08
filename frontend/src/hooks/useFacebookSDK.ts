import { useEffect } from "react";

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

const useFacebookSDK = () => {
  useEffect(() => {
    const loadFacebookSDK = () => {
      return new Promise<void>((resolve) => {
        if (document.getElementById("facebook-jssdk")) {
          resolve();
          return;
        }

        window.fbAsyncInit = function () {
          window.FB.init({
            appId: "641170412407753", // ✅ Replace this
            cookie: true,
            xfbml: true,
            version: "v22.0", // ✅ MUST be string like this
          });
          console.log("✅ FB SDK initialized");
          resolve();
        };

        const script = document.createElement("script");
        script.id = "facebook-jssdk";
        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      });
    };

    loadFacebookSDK();
  }, []);
};

export default useFacebookSDK;
