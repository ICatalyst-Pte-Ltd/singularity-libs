import { Client } from './client';
import { User } from './user';
export declare class ClientIdentifier {
    clientid?: string;
    createdBy: string;
    created: BigInt;
    objectVersion: BigInt;
    guid: string;
    modified: BigInt;
    modifiedBy: string;
    userid?: string;
    Client?: Client;
    User?: User;
}
