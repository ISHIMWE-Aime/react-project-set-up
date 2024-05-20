import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import routes from "../../routes/routes";
import { IRoute } from "../../types/common";
import Sample from "../../pages/Sample";

const RoutesProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex-column p-11">
          <h1 className="mb-6">WLC Front End Project Set Up</h1>
          <button>
            Click here <NavLink to="/sample">Routing Sample</NavLink> to see
            routing sample please
          </button>
        </div>
      ),
    },
    {
      path: "/sample",
      element: <Sample />,
      children: [
        ...routes.map((route: IRoute) => ({
          path: route.path,
          element: <route.element />,
        })),
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RoutesProvider;
