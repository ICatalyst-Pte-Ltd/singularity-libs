import { UpdateableT } from '@icatalyst/js-core';
type OIDCConnectorURLs = {
    auth: string;
    token: string;
    jwks: string;
    userInfo: string;
    signOff: string;
    oidcDiscovery: string;
    introspect: string;
    revokeToken: string;
    issuer: string;
};
type OIDCClientInfo = {
    clientID: string;
    clientSecret: string;
};
export declare class OIDCConnectorDto {
    urls: OIDCConnectorURLs;
    provider: OIDCClientInfo;
    clientID: string;
}
export declare class OIDCConnectorCreateDto {
    name: string;
    description?: string;
}
export declare class OIDCConnectorQueryDto {
}
declare const OIDCConnectorUpdateDto_base: new () => {
    name?: string | undefined;
    description?: string | undefined;
};
export declare class OIDCConnectorUpdateDto extends OIDCConnectorUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
