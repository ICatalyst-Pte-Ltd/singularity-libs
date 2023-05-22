import { Client } from './client';
import { Organisation } from './organisation';
export declare class AuthProvider {
    clientID: string;
    organisationID?: string;
    name: string;
    description: string;
    providerType: string;
    urls: object;
    provider: object;
    guid: string;
    created: BigInt;
    createdBy: string;
    modified: BigInt;
    modifiedBy: string;
    objectVersion: BigInt;
    Client: Client;
    Organisation?: Organisation;
}
