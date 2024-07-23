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
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  function closeAuthModal() {
    setIsAuthDialogOpen(false);
  }

  function openAuthModal() {
    setIsAuthDialogOpen(true);
  }

  return (
    <AppContext.Provider
      value={{
        isAuthDialogOpen,
        closeAuthModal,
        openAuthModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
