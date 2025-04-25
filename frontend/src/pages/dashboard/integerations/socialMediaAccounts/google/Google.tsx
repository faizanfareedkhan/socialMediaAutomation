/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";


const Google = () => {
  return (
    <>
      <LoginSocialGoogle
        client_id="YOUR_GOOGLE_CLIENT_ID"
        onResolve={(response: any) => {
          console.log(response);
        }}
        onReject={(error: any) => {
          console.log(error);
        }}
      >
        <div className="custom-google-btn">
          <GoogleLoginButton text="Continue with Google" />
        </div>
      </LoginSocialGoogle>
    </>
  );
};

export default Google;
