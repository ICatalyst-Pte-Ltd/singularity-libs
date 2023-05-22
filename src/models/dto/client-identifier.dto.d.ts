import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const ClientIdentifierDto_base: new () => Omit<PrismaModel.ClientIdentifier, "created" | "modified" | "objectVersion">;
export declare class ClientIdentifierDto extends ClientIdentifierDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class ClientIdentifierCreateDto {
    name: string;
    description?: string;
}
export declare class ClientIdentifierQueryDto {
}
declare const ClientIdentifierUpdateDto_base: new () => {
    name?: string | undefined;
    description?: string | undefined;
};
export declare class ClientIdentifierUpdateDto extends ClientIdentifierUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
