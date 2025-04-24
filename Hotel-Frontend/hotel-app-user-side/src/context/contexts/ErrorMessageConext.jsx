import { createContext} from "react";

export const ErrorMessageContext = createContext({showError: (msg) => {}, closeError: () => {}})