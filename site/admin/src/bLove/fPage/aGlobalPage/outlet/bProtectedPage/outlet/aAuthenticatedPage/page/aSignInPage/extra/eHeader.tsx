import fullRoute from "@/bLove/gRoute/bFullRoute";


const header = () => ({
  title: "Welcome back",
  subtitle: "Sign in to access your existing account...",
  submitButtonText: "Sign In",
  links: [
    { note: "Dont't have an account?", text: "Sign Up", to: fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute },
    { note: "Forgot password?", text: "Reset Now", to: fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute },
  ],
  showSampleCredential: true
})

export default header;
