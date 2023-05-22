import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const PermissionDto_base: new () => Omit<PrismaModel.Role, "created" | "modified" | "objectVersion">;
export declare class PermissionDto extends PermissionDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class PermissionCreateDto {
}
export declare class PermissionQueryDto {
    direct: boolean;
}
declare const PermissionUpdateDto_base: new () => {};
export declare class PermissionUpdateDto extends PermissionUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
