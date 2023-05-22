import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const ClientDto_base: new () => Omit<PrismaModel.Client, "created" | "modified" | "objectVersion" | "AuthProvider" | "hasCredentials" | "requireTermsAccepted" | "ClientOrganisations" | "ClientIdentifier" | "ClientData" | "Licence" | "EmailTemplates">;
export declare class ClientDto extends ClientDto_base {
    created: number;
    modified: number;
    objectVersion: number;
    hasCredentials: boolean;
    requireTermsAccepted: boolean;
}
export declare class ClientCreateDto {
}
export declare class ClientQueryDto {
}
declare const ClientUpdateDto_base: new () => {};
export declare class ClientUpdateDto extends ClientUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
