import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const ResourceDto_base: new () => Omit<PrismaModel.Resource, "created" | "modified" | "objectVersion">;
export declare class ResourceDto extends ResourceDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class ResourceCreateDeprecatedDto {
    resourceID: string;
    resourceType: string;
    description?: string;
}
export declare class ResourceCreateDto {
    resourceID: string;
    description: string;
}
export declare class ResourceQueryDto {
    direct?: boolean;
    incoming?: boolean;
}
export declare class ResourceUpdateDto implements UpdateableT {
    description: string;
    objectVersion: number;
}
export declare class ResourceQueryDeprecatedDto {
    resourceType?: string;
    direct?: boolean;
}
export {};
