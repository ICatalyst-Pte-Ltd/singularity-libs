import { __decorate, __metadata } from "tslib";
import { IsArray, IsEmail, IsNumber, IsOptional, IsString, IsUrl, MaxLength, MinLength, } from 'class-validator';
import { GroupCreateDto } from './group.dto';
import { RelationshipCreateDto } from './relationship.dto';
import { RoleCreateDto } from './role.dto';
import { PrismaModel } from '../prisma';
import { Omit } from '@icatalyst/js-core';
export class OrganisationDto extends Omit(PrismaModel.Organisation, [
    'created',
    'modified',
    'objectVersion',
    'LicenceKey',
    'OrganisationClient',
    'OrganisationLicence',
    'AuthProvider',
]) {
}
export class AddUserToOrganisationDto {
}
__decorate([
    IsEmail(),
    MinLength(4),
    MaxLength(256),
    __metadata("design:type", String)
], AddUserToOrganisationDto.prototype, "email", void 0);
export class PromoteUserToOrganisationAdminDto {
}
__decorate([
    MinLength(4),
    MaxLength(256),
    __metadata("design:type", String)
], PromoteUserToOrganisationAdminDto.prototype, "userID", void 0);
export class DeleteUserFromOrganisationDto {
}
__decorate([
    MinLength(4),
    MaxLength(256),
    __metadata("design:type", String)
], DeleteUserFromOrganisationDto.prototype, "userID", void 0);
export class RelationshipTemplateDto extends RelationshipCreateDto {
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], RelationshipTemplateDto.prototype, "destinationID", void 0);
export class GroupTemplateDto extends GroupCreateDto {
}
__decorate([
    IsOptional(),
    IsArray(),
    __metadata("design:type", Array)
], GroupTemplateDto.prototype, "relationships", void 0);
export class RoleTemplateDto extends RoleCreateDto {
}
__decorate([
    IsOptional(),
    IsArray(),
    __metadata("design:type", Array)
], RoleTemplateDto.prototype, "relationships", void 0);
export class OrganisationTemplateDto {
}
__decorate([
    IsOptional(),
    IsArray(),
    __metadata("design:type", Array)
], OrganisationTemplateDto.prototype, "groups", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    __metadata("design:type", Array)
], OrganisationTemplateDto.prototype, "roles", void 0);
export class OrganisationCreateDto {
}
__decorate([
    IsString(),
    MaxLength(1024),
    MinLength(4),
    __metadata("design:type", String)
], OrganisationCreateDto.prototype, "name", void 0);
__decorate([
    IsString(),
    MaxLength(2048),
    MinLength(4),
    IsOptional(),
    __metadata("design:type", String)
], OrganisationCreateDto.prototype, "description", void 0);
__decorate([
    IsString(),
    MaxLength(2048),
    MinLength(4),
    IsOptional(),
    __metadata("design:type", String)
], OrganisationCreateDto.prototype, "tagline", void 0);
__decorate([
    IsOptional(),
    IsUrl({
        protocols: ['https'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        allow_fragments: false,
        allow_query_components: true,
    }),
    __metadata("design:type", String)
], OrganisationCreateDto.prototype, "privacyURI", void 0);
__decorate([
    IsOptional(),
    IsUrl({
        protocols: ['https'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        allow_fragments: false,
        allow_query_components: true,
    }),
    __metadata("design:type", String)
], OrganisationCreateDto.prototype, "logoURI", void 0);
__decorate([
    IsOptional(),
    IsUrl({
        protocols: ['https'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        allow_fragments: false,
        allow_query_components: true,
    }),
    __metadata("design:type", String)
], OrganisationCreateDto.prototype, "websiteURI", void 0);
__decorate([
    IsOptional(),
    IsUrl({
        protocols: ['https'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        allow_fragments: false,
        allow_query_components: true,
    }),
    __metadata("design:type", String)
], OrganisationCreateDto.prototype, "featureImageURI", void 0);
__decorate([
    IsOptional(),
    __metadata("design:type", OrganisationTemplateDto)
], OrganisationCreateDto.prototype, "template", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], OrganisationCreateDto.prototype, "licence", void 0);
export class OrganisationQueryDto {
}
export class OrganisationUpdateDto {
}
__decorate([
    IsString(),
    MaxLength(1024),
    MinLength(4),
    __metadata("design:type", String)
], OrganisationUpdateDto.prototype, "name", void 0);
__decorate([
    IsString(),
    MaxLength(2048),
    MinLength(4),
    IsOptional(),
    __metadata("design:type", String)
], OrganisationUpdateDto.prototype, "description", void 0);
__decorate([
    IsString(),
    MaxLength(2048),
    MinLength(4),
    IsOptional(),
    __metadata("design:type", String)
], OrganisationUpdateDto.prototype, "tagline", void 0);
__decorate([
    IsOptional(),
    IsUrl({
        protocols: ['https'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        allow_fragments: false,
        allow_query_components: true,
    }),
    __metadata("design:type", String)
], OrganisationUpdateDto.prototype, "privacyURI", void 0);
__decorate([
    IsOptional(),
    IsUrl({
        protocols: ['https'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        allow_fragments: false,
        allow_query_components: true,
    }),
    __metadata("design:type", String)
], OrganisationUpdateDto.prototype, "logoURI", void 0);
__decorate([
    IsOptional(),
    IsUrl({
        protocols: ['https'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        allow_fragments: false,
        allow_query_components: true,
    }),
    __metadata("design:type", String)
], OrganisationUpdateDto.prototype, "websiteURI", void 0);
__decorate([
    IsOptional(),
    IsUrl({
        protocols: ['https'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        allow_fragments: false,
        allow_query_components: true,
    }),
    __metadata("design:type", String)
], OrganisationUpdateDto.prototype, "featureImageURI", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], OrganisationUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=organisation.dto.js.map