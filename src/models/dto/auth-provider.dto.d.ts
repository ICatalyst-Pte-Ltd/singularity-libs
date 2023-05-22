import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
type ProviderConfiguration = {
    clientID: string;
    clientSecret: string;
};
type ProviderUrls = Record<string, string>;
declare const AuthProviderDto_base: new () => Omit<PrismaModel.AuthProvider, "created" | "modified" | "objectVersion" | "Client" | "Organisation" | "urls" | "provider">;
export declare class AuthProviderDto extends AuthProviderDto_base {
    urls: ProviderUrls;
    provider: ProviderConfiguration;
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class AuthProviderCreateDto {
    name: string;
    description?: string;
    providerType: string;
    organisationID: string;
    urls: any;
    provider: any;
}
export declare class AuthProviderQueryDto {
    organisationID: string;
}
declare const AuthProviderUpdateDto_base: new () => {
    name?: string | undefined;
    description?: string | undefined;
    providerType?: string | undefined;
    organisationID?: string | undefined;
    urls?: any;
    provider?: any;
};
export declare class AuthProviderUpdateDto extends AuthProviderUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
