import { createContext, useContext, useState } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: "success",
    message: "",
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (data) => setState({ isOpen: true, type: data.type, message: data.message }),
        onClose: () => setState({ isOpen: false, type: "success", message: "" }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);