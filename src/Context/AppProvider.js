import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function useApp() {
  const context = useContext(AppContext);

  if (context == null) {
    throw new Error("AppProvider Provider missing");
  }

  return context;
}

function AppProvider({ children }) {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  function closeModal() {
    setAuthDialogOpen(false);
  }

  function openModal() {
    setAuthDialogOpen(true);
  }

  return (
    <AppContext.Provider
      value={{
        authDialogOpen,
        closeModal,
        openModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
