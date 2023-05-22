import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const DeviceDto_base: new () => Omit<PrismaModel.Device, "created" | "modified" | "objectVersion">;
export declare class DeviceDto extends DeviceDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class DeviceCreateDto {
}
export declare class DeviceQueryDto {
}
declare const DeviceUpdateDto_base: new () => {};
export declare class DeviceUpdateDto extends DeviceUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
