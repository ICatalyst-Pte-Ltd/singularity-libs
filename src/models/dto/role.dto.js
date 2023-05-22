import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString, MaxLength, MinLength, } from 'class-validator';
import { PrismaModel } from '../prisma';
export class RoleDto extends Omit(PrismaModel.Role, [
    'created',
    'modified',
    'objectVersion',
]) {
}
export class RoleCreateDto {
}
__decorate([
    IsString(),
    MaxLength(256),
    MinLength(4),
    __metadata("design:type", String)
], RoleCreateDto.prototype, "name", void 0);
__decorate([
    IsString(),
    MaxLength(2048),
    MinLength(4),
    IsOptional(),
    __metadata("design:type", String)
], RoleCreateDto.prototype, "description", void 0);
export class RoleQueryDto {
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
], RoleQueryDto.prototype, "direct", void 0);
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
], RoleQueryDto.prototype, "incoming", void 0);
export class RoleUpdateDto extends Partial(RoleCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], RoleUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=role.dto.js.map