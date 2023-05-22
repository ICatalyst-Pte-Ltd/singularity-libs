import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const RelationshipTypeDto_base: new () => Omit<PrismaModel.EdgeType, "created" | "modified" | "objectVersion">;
export declare class RelationshipTypeDto extends RelationshipTypeDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class RelationshipTypeCreateDto {
}
export declare class RelationshipTypeQueryDto {
}
declare const RelationshipTypeUpdateDto_base: new () => {};
export declare class RelationshipTypeUpdateDto extends RelationshipTypeUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
