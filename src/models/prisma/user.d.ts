import { ClientIdentifier } from './client_identifier';
import { UserEmail } from './user_email';
export declare class User {
    primaryEmailID?: string;
    profileUri?: string;
    createdBy: string;
    created: BigInt;
    hasCredentials: number;
    displayName?: string;
    objectVersion: BigInt;
    guid: string;
    modified: BigInt;
    modifiedBy: string;
    profileImageUri?: string;
    userName?: string;
    ClientIdentifier: ClientIdentifier[];
    Emails: UserEmail[];
    PrimaryEmail?: UserEmail;
}
