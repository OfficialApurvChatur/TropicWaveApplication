import fullRoute from "@/bLove/gRoute/bFullRoute";


const header = () => ({
  title: "Welcome",
  subtitle: "Sign up to create your new account...",
  submitButtonText: "Sign Up",
  links: [
    { note: "Already have an account?", text: "Sign In", to: fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute },
    { note: "Forgot password?", text: "Reset Now", to: fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute },
  ],
  showSampleCredential: false
})

export default header;
