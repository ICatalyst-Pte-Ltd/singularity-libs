import { OrganisationClient } from './organisation_client';
import { OrganisationLicence } from './organisation_licence';
import { LicenceKey } from './licence_key';
import { AuthProvider } from './auth_provider';
export declare class Organisation {
    name: string;
    description: string;
    tagline: string;
    privacyURI?: string;
    logoURI?: string;
    websiteURI?: string;
    featureImageURI?: string;
    guid: string;
    created: BigInt;
    createdBy: string;
    modified: BigInt;
    modifiedBy: string;
    objectVersion: BigInt;
    OrganisationClient: OrganisationClient[];
    OrganisationLicence: OrganisationLicence[];
    LicenceKey: LicenceKey[];
    AuthProvider: AuthProvider[];
}
