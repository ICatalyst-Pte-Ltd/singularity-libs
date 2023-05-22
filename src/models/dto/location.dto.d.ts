import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const LocationDto_base: new () => Omit<PrismaModel.Location, "created" | "modified" | "objectVersion">;
export declare class LocationDto extends LocationDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class LocationCreateDto {
}
export declare class LocationQueryDto {
}
declare const LocationUpdateDto_base: new () => {};
export declare class LocationUpdateDto extends LocationUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
