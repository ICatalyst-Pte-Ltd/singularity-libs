import { PrismaModel } from '../prisma';
declare const UserDto_base: new () => Omit<PrismaModel.User, "created" | "modified" | "objectVersion" | "hasCredentials" | "ClientIdentifier" | "primaryEmailID" | "userName" | "Emails" | "PrimaryEmail">;
export declare class UserDto extends UserDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class UserCreateDto {
    displayName?: string;
    email: string;
    password?: string;
    profileImageURI?: string;
}
export declare class UserQueryDto {
    email?: string;
    displayName?: string;
}
declare const UserUpdateDto_base: new () => {
    displayName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    profileImageURI?: string | undefined;
};
export declare class UserUpdateDto extends UserUpdateDto_base {
    objectVersion: number;
}
export {};
