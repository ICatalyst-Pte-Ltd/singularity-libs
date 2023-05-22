import { Licence } from './licence';
import { Organisation } from './organisation';
export declare class OrganisationLicence {
    licenceID: string;
    organisationID: string;
    enabled: boolean;
    expiry?: BigInt;
    start?: BigInt;
    guid: string;
    createdBy: string;
    created: BigInt;
    objectVersion: BigInt;
    modified: BigInt;
    modifiedBy: string;
    Licence: Licence;
    Organisation: Organisation;
}
