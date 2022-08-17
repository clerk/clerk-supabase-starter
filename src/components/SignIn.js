import { SignIn } from '@clerk/clerk-react';

const SignInScreen = () => {
  return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />;
};

export default SignInScreen;
