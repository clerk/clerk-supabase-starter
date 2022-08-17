import { SignUp } from '@clerk/clerk-react';

const SignUpScreen = () => {
  return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />;
};

export default SignUpScreen;
