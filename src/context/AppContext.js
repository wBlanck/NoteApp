import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState();
  return (
    <AppContext.Provider value={{ modalContent, setModalContent }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
