import { ComponentType } from "react";
export interface IRoute {
    path: string;
    element: ComponentType<unknown>;
    allowedPermissionGroup?: PermissionGroup;
    allowedPermissions?: Permission[];
    superAdmin?: boolean;
  }