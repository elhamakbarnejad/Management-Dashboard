import { RouterProvider, ScrollRestoration } from "react-router";
import router from "./routes";
import { ThemeProvider } from "./context/Theme";
import LogoutProvider from "./context/Logout";

const App = () => {
  return (
    <LogoutProvider>
      <ThemeProvider>
        <RouterProvider router={router}>
          <ScrollRestoration />
        </RouterProvider>
      </ThemeProvider>
    </LogoutProvider>
  );
};

export default App;
