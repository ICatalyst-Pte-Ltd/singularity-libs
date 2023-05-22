import { LicenceConstraint } from './licence_constraint';
import { OrganisationLicence } from './organisation_licence';
import { Client } from './client';
import { LicenceKey } from './licence_key';
export declare class Licence {
    name: string;
    description?: string;
    active: boolean;
    clientID: string;
    duration: number;
    template: object;
    guid: string;
    createdBy: string;
    created: BigInt;
    objectVersion: BigInt;
    modified: BigInt;
    modifiedBy: string;
    Constraints: LicenceConstraint[];
    OrganisationLicence: OrganisationLicence[];
    Client: Client;
    LicenceKeys: LicenceKey[];
}
