import { Licence } from './licence';
import { Organisation } from './organisation';
export declare class LicenceKey {
    licenceID: string;
    applied?: BigInt;
    organisationID?: string;
    duration?: number;
    guid: string;
    createdBy: string;
    created: BigInt;
    objectVersion: BigInt;
    modified: BigInt;
    modifiedBy: string;
    Licence: Licence;
    Organisation?: Organisation;
}
