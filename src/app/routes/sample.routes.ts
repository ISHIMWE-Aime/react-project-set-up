import { IRoute } from "../types/common";
import Sample1 from "../components/Sample1";
import Sample2 from "../components/Sample2";

const SampleRoutes: IRoute[] = [
    {
        path: "/sample-1",
        element: Sample1,
        allowedPermissionGroup: "sample",
        allowedPermissions: ["sample"],
    },
    {
        path: "/sample-2",
        element: Sample2,
        allowedPermissionGroup: "sample",
        allowedPermissions: ["sample"],
    }
]

export default SampleRoutes;