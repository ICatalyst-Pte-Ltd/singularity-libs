import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const PersonalAccessTokenDto_base: new () => Omit<PrismaModel.PersonalAccessToken, "created" | "modified" | "objectVersion">;
export declare class PersonalAccessTokenDto extends PersonalAccessTokenDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class PersonalAccessTokenCreateDto {
    name: string;
    start?: number;
    expiry?: number;
    enabled?: boolean;
}
export declare class PersonalAccessTokenQueryDto {
}
declare const PersonalAccessTokenUpdateDto_base: new () => {
    name?: string | undefined;
    start?: number | undefined;
    expiry?: number | undefined;
    enabled?: boolean | undefined;
};
export declare class PersonalAccessTokenUpdateDto extends PersonalAccessTokenUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
