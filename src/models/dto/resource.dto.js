import { __decorate, __metadata } from "tslib";
import { Omit } from '@icatalyst/js-core';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString, MaxLength, } from 'class-validator';
import { PrismaModel } from '../prisma';
export class ResourceDto extends Omit(PrismaModel.Resource, [
    'created',
    'modified',
    'objectVersion',
]) {
}
export class ResourceCreateDeprecatedDto {
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], ResourceCreateDeprecatedDto.prototype, "resourceID", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], ResourceCreateDeprecatedDto.prototype, "resourceType", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], ResourceCreateDeprecatedDto.prototype, "description", void 0);
export class ResourceCreateDto {
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], ResourceCreateDto.prototype, "resourceID", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], ResourceCreateDto.prototype, "description", void 0);
export class ResourceQueryDto {
}
__decorate([
    IsOptional(),
    IsBoolean(),
    Transform(({ obj, key }) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return obj[key] === 'true';
        }
        return value;
    }),
    __metadata("design:type", Boolean)
], ResourceQueryDto.prototype, "direct", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    Transform(({ obj, key }) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return obj[key] === 'true';
        }
        return value;
    }),
    __metadata("design:type", Boolean)
], ResourceQueryDto.prototype, "incoming", void 0);
export class ResourceUpdateDto {
}
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], ResourceUpdateDto.prototype, "description", void 0);
__decorate([
    IsNumber(),
    IsOptional(),
    __metadata("design:type", Number)
], ResourceUpdateDto.prototype, "objectVersion", void 0);
export class ResourceQueryDeprecatedDto {
}
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(64),
    __metadata("design:type", String)
], ResourceQueryDeprecatedDto.prototype, "resourceType", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    Transform(({ obj, key }) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return obj[key] === 'true';
        }
        return value;
    }),
    __metadata("design:type", Boolean)
], ResourceQueryDeprecatedDto.prototype, "direct", void 0);
//# sourceMappingURL=resource.dto.js.map