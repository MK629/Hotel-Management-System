import { createContext } from "react";

export const SuccessMessageContext = createContext({showSuccess : (msg) => {}, closeSuccess: () => {}})