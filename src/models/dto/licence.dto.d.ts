import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
import { GroupCreateDto } from './group.dto';
declare const LicenceDto_base: new () => Omit<PrismaModel.Licence, "created" | "modified" | "objectVersion" | "Client" | "clientID" | "OrganisationLicence" | "template" | "Constraints" | "LicenceKeys">;
export declare class LicenceDto extends LicenceDto_base {
    template: Record<string, any>;
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class LicenceRelationshipDto {
    relationshipTypeID: string;
    roleID: string;
    limit: number;
    isDefault: boolean;
}
export declare class GroupDefinitionDto extends GroupCreateDto {
    relations?: LicenceRelationshipDto[];
}
export declare class LicenceTemplateDto {
    groups?: GroupDefinitionDto[];
}
export declare class LicenceCreateDto {
    name: string;
    description?: string;
    template?: LicenceTemplateDto;
    clientID?: string;
    duration?: number;
}
export declare class LicenceQueryDto {
}
declare const LicenceUpdateDto_base: new () => {
    name?: string | undefined;
    description?: string | undefined;
    template?: LicenceTemplateDto | undefined;
    clientID?: string | undefined;
    duration?: number | undefined;
};
export declare class LicenceUpdateDto extends LicenceUpdateDto_base implements UpdateableT {
    objectVersion: number;
    active?: boolean;
}
export {};
