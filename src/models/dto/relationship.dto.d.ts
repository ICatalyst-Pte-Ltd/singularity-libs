import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const RelationshipDto_base: new () => Omit<PrismaModel.Edge, "created" | "modified" | "objectVersion" | "expiry" | "start" | "hops">;
export declare class RelationshipDto extends RelationshipDto_base {
    expiry?: number;
    start?: number;
    hops?: number;
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class RelationshipCreateDto {
    start?: number;
    expiry?: number;
    relationshipTypeID: string;
}
export declare class RelationshipQueryDto {
    resolveUsers?: boolean;
}
declare const RelationshipUpdateDto_base: new () => {
    start?: number | undefined;
    expiry?: number | undefined;
    relationshipTypeID?: string | undefined;
};
export declare class RelationshipUpdateDto extends RelationshipUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export declare class AddUserToResourceDto {
    email: string;
}
export declare class PromoteResourceToAdminDto {
    resourceID: string;
}
export {};
