import { createBrowserRouter } from "react-router-dom";
import ExtensionsList from "../pages/main/extensionsList";
import Header from "../components/Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen w-auto mx-auto pt-10 pb-10 px-4 sm:px-12 md:px-8 lg:px-32 bg-blue-fade">
        <Header />
        <main className="pt-6">
          <ExtensionsList />
        </main>
      </div>
    ),
  },
]);

export default router;
