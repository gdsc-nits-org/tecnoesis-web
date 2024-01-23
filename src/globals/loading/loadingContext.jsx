import { createContext } from "react";

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: null,
});

export default LoadingContext;
