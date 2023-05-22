import { __decorate, __metadata } from "tslib";
import { IsGreaterThan, Omit, Partial } from '@icatalyst/js-core';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength, } from 'class-validator';
import { PrismaModel } from '../prisma';
export class RelationshipDto extends Omit(PrismaModel.Edge, [
    'expiry',
    'start',
    'hops',
    'created',
    'modified',
    'objectVersion',
]) {
}
export class RelationshipCreateDto {
}
__decorate([
    IsNumber(),
    IsOptional(),
    Min(new Date().getTime() - 1000 * 60 * 60 * 24 * 365 * 10),
    __metadata("design:type", Number)
], RelationshipCreateDto.prototype, "start", void 0);
__decorate([
    IsNumber(),
    IsOptional(),
    IsGreaterThan('start'),
    Max(10426947413000),
    __metadata("design:type", Number)
], RelationshipCreateDto.prototype, "expiry", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], RelationshipCreateDto.prototype, "relationshipTypeID", void 0);
export class RelationshipQueryDto {
}
__decorate([
    IsBoolean(),
    IsOptional(),
    Transform(({ obj, key }) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return obj[key] === 'true';
        }
        return value;
    }),
    __metadata("design:type", Boolean)
], RelationshipQueryDto.prototype, "resolveUsers", void 0);
export class RelationshipUpdateDto extends Partial(RelationshipCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], RelationshipUpdateDto.prototype, "objectVersion", void 0);
export class AddUserToResourceDto {
}
__decorate([
    IsEmail(),
    MinLength(4),
    MaxLength(256),
    __metadata("design:type", String)
], AddUserToResourceDto.prototype, "email", void 0);
export class PromoteResourceToAdminDto {
}
__decorate([
    MinLength(4),
    MaxLength(256),
    __metadata("design:type", String)
], PromoteResourceToAdminDto.prototype, "resourceID", void 0);
//# sourceMappingURL=relationship.dto.js.map