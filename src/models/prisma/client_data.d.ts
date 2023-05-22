import { Client } from './client';
export declare class ClientData {
    lastAccessed: BigInt;
    clientID: string;
    entityID: string;
    data?: string;
    createdBy: string;
    created: BigInt;
    objectVersion: BigInt;
    guid: string;
    modified: BigInt;
    modifiedBy: string;
    Client?: Client;
}
