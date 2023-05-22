import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const UserEmailDto_base: new () => Omit<PrismaModel.UserEmail, "created" | "modified" | "objectVersion">;
export declare class UserEmailDto extends UserEmailDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class UserEmailCreateDto {
}
export declare class UserEmailQueryDto {
}
declare const UserEmailUpdateDto_base: new () => {};
export declare class UserEmailUpdateDto extends UserEmailUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
