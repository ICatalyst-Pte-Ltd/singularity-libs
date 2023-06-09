import { OrganisationClient } from './organisation_client';
import { ClientIdentifier } from './client_identifier';
import { ClientData } from './client_data';
import { Licence } from './licence';
import { AuthProvider } from './auth_provider';
import { Template } from './template';
export declare class Client {
    clientType?: string;
    privacyURI?: string;
    defaultScope?: string;
    hasCredentials: number;
    description?: string;
    logoURI?: string;
    requireTermsAccepted: number;
    companyID?: string;
    websiteURI?: string;
    name?: string;
    backgroundURI?: string;
    redirectionURIs?: string;
    billingEmail?: string;
    adminEmail?: string;
    initialRoleID?: string;
    termsURI?: string;
    createdBy: string;
    created: BigInt;
    objectVersion: BigInt;
    guid: string;
    modified: BigInt;
    modifiedBy: string;
    ClientOrganisations: OrganisationClient[];
    ClientIdentifier: ClientIdentifier[];
    ClientData: ClientData[];
    Licence: Licence[];
    AuthProvider: AuthProvider[];
    EmailTemplates: Template[];
}
