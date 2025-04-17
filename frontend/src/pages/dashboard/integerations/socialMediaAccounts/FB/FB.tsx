/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
const FB = () => {
  return (
    <>
      <LoginSocialFacebook
        appId="692911389909846"
        onResolve={(response: any) => {
          console.log(response);
        }}
        onReject={(error: any) => {
          console.log(error);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </>
  );
};

export default FB;
