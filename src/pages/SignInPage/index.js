import React from "react";
import SignInComponent from "../../components/SignUpSignInContainer/SignInComponent";
import SignUpInLayout from "../../layout/SignUpInLayout";

const SignInPage = () => {  
  return (
    <>
      <SignUpInLayout>
        <SignInComponent />
      </SignUpInLayout>
    </>
  );
};

export default SignInPage;
