import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const RoleDto_base: new () => Omit<PrismaModel.Role, "created" | "modified" | "objectVersion">;
export declare class RoleDto extends RoleDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class RoleCreateDto {
    name: string;
    description?: string;
}
export declare class RoleQueryDto {
    direct?: boolean;
    incoming?: boolean;
}
declare const RoleUpdateDto_base: new () => {
    name?: string | undefined;
    description?: string | undefined;
};
export declare class RoleUpdateDto extends RoleUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
