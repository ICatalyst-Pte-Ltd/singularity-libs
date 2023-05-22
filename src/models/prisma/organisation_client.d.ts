import { Client } from './client';
import { Organisation } from './organisation';
export declare class OrganisationClient {
    clientID: string;
    organisationID: string;
    guid: string;
    created: BigInt;
    createdBy: string;
    modified: BigInt;
    modifiedBy: string;
    objectVersion: BigInt;
    Client: Client;
    Organisation: Organisation;
}
