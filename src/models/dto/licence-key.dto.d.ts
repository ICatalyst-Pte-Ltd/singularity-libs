import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const LicenceKeyDto_base: new () => Omit<PrismaModel.LicenceKey, "created" | "modified" | "objectVersion" | "Organisation" | "Licence" | "applied">;
export declare class LicenceKeyDto extends LicenceKeyDto_base {
    applied: number | null;
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class LicenceKeyCreateDto {
    duration?: number;
}
export declare class LicenceKeyQueryDto {
}
declare const LicenceKeyUpdateDto_base: new () => {
    duration?: number | undefined;
};
export declare class LicenceKeyUpdateDto extends LicenceKeyUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
