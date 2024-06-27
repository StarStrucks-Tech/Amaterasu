// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.180.0
//   protoc               v5.27.0
// source: protos-frontend/enums/PermissionTypes.proto

/* eslint-disable */

export const protobufPackage = "enums";

/**
 * PermissionType enumeration
 * Represents different types of permissions
 */
export enum PermissionType {
  /**
   * NOTIFICATIONS - Notifications permission type
   * This value represents permission for notifications
   */
  NOTIFICATIONS = 0,
  /**
   * LOCATION - Location permission type
   * This value represents permission for location access
   */
  LOCATION = 1,
  UNRECOGNIZED = -1,
}

export function permissionTypeFromJSON(object: any): PermissionType {
  switch (object) {
    case 0:
    case "NOTIFICATIONS":
      return PermissionType.NOTIFICATIONS;
    case 1:
    case "LOCATION":
      return PermissionType.LOCATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PermissionType.UNRECOGNIZED;
  }
}

export function permissionTypeToJSON(object: PermissionType): string {
  switch (object) {
    case PermissionType.NOTIFICATIONS:
      return "NOTIFICATIONS";
    case PermissionType.LOCATION:
      return "LOCATION";
    case PermissionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}