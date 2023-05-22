import { __decorate, __metadata } from "tslib";
import { IsHTMLSafe, IsName, Omit, Partial, } from '@icatalyst/js-core';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsBoolean, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength, ValidateNested, } from 'class-validator';
import { PrismaModel } from '../prisma';
import { GroupCreateDto } from './group.dto';
export class LicenceDto extends Omit(PrismaModel.Licence, [
    'created',
    'modified',
    'objectVersion',
    'clientID',
    'Client',
    'Constraints',
    'LicenceKeys',
    'OrganisationLicence',
    'template',
]) {
}
export class LicenceRelationshipDto {
}
__decorate([
    IsString(),
    MaxLength(256),
    __metadata("design:type", String)
], LicenceRelationshipDto.prototype, "relationshipTypeID", void 0);
__decorate([
    IsString(),
    MaxLength(256),
    __metadata("design:type", String)
], LicenceRelationshipDto.prototype, "roleID", void 0);
__decorate([
    IsNumber(),
    Min(1),
    __metadata("design:type", Number)
], LicenceRelationshipDto.prototype, "limit", void 0);
__decorate([
    IsBoolean(),
    __metadata("design:type", Boolean)
], LicenceRelationshipDto.prototype, "isDefault", void 0);
export class GroupDefinitionDto extends GroupCreateDto {
}
__decorate([
    IsOptional(),
    ValidateNested({
        each: true,
    }),
    ArrayNotEmpty(),
    Type(() => LicenceRelationshipDto),
    __metadata("design:type", Array)
], GroupDefinitionDto.prototype, "relations", void 0);
export class LicenceTemplateDto {
}
__decorate([
    ValidateNested({
        each: true,
    }),
    Type(() => GroupDefinitionDto),
    __metadata("design:type", Array)
], LicenceTemplateDto.prototype, "groups", void 0);
export class LicenceCreateDto {
}
__decorate([
    IsString(),
    MaxLength(256),
    MinLength(4),
    IsName(),
    __metadata("design:type", String)
], LicenceCreateDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    MaxLength(2048),
    IsHTMLSafe(),
    __metadata("design:type", String)
], LicenceCreateDto.prototype, "description", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    __metadata("design:type", LicenceTemplateDto)
], LicenceCreateDto.prototype, "template", void 0);
__decorate([
    IsOptional(),
    Min(1),
    Max(3650),
    __metadata("design:type", Number)
], LicenceCreateDto.prototype, "duration", void 0);
export class LicenceQueryDto {
}
export class LicenceUpdateDto extends Partial(LicenceCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], LicenceUpdateDto.prototype, "objectVersion", void 0);
__decorate([
    IsOptional(),
    __metadata("design:type", Boolean)
], LicenceUpdateDto.prototype, "active", void 0);
//# sourceMappingURL=licence.dto.js.map