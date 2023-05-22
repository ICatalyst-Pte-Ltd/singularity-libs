import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { PrismaModel } from '../prisma';
export class PermissionDto extends Omit(PrismaModel.Role, [
    'created',
    'modified',
    'objectVersion',
]) {
}
export class PermissionCreateDto {
}
export class PermissionQueryDto {
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
], PermissionQueryDto.prototype, "direct", void 0);
export class PermissionUpdateDto extends Partial(PermissionCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], PermissionUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=permission.dto.js.map