import { GroupCreateDto } from './group.dto';
import { RelationshipCreateDto } from './relationship.dto';
import { RoleCreateDto } from './role.dto';
import { PrismaModel } from '../prisma';
import { UpdateableT } from '@icatalyst/js-core';
declare const OrganisationDto_base: new () => Omit<PrismaModel.Organisation, "created" | "modified" | "objectVersion" | "LicenceKey" | "OrganisationClient" | "OrganisationLicence" | "AuthProvider">;
export declare class OrganisationDto extends OrganisationDto_base {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class AddUserToOrganisationDto {
    email: string;
}
export declare class PromoteUserToOrganisationAdminDto {
    userID: string;
}
export declare class DeleteUserFromOrganisationDto {
    userID: string;
}
export declare class RelationshipTemplateDto extends RelationshipCreateDto {
    destinationID: string;
}
export declare class GroupTemplateDto extends GroupCreateDto {
    relationships?: RelationshipTemplateDto[];
}
export declare class RoleTemplateDto extends RoleCreateDto {
    relationships?: RelationshipTemplateDto[];
}
export declare class OrganisationTemplateDto {
    groups?: GroupTemplateDto[];
    roles?: RoleTemplateDto[];
}
export declare class OrganisationCreateDto {
    name: string;
    description?: string;
    tagline?: string;
    privacyURI?: string;
    logoURI?: string;
    websiteURI?: string;
    featureImageURI?: string;
    template?: OrganisationTemplateDto;
    licence: string;
}
export declare class OrganisationQueryDto {
}
export declare class OrganisationUpdateDto implements UpdateableT {
    name: string;
    description?: string;
    tagline?: string;
    privacyURI?: string;
    logoURI?: string;
    websiteURI?: string;
    featureImageURI?: string;
    objectVersion: number;
}
export {};
