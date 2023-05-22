import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const GroupDto_base: new () => Omit<PrismaModel.Role, "created" | "modified" | "objectVersion">;
export declare class GroupDto extends GroupDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class GroupCreateDto {
    name: string;
    description?: string;
}
export declare class GroupQueryDto {
    direct?: boolean;
}
declare const GroupUpdateDto_base: new () => {
    name?: string | undefined;
    description?: string | undefined;
};
export declare class GroupUpdateDto extends GroupUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
