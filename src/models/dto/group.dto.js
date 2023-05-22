import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString, MaxLength, MinLength, } from 'class-validator';
import { PrismaModel } from '../prisma';
export class GroupDto extends Omit(PrismaModel.Role, [
    'created',
    'modified',
    'objectVersion',
]) {
}
export class GroupCreateDto {
}
__decorate([
    IsString(),
    MaxLength(256),
    MinLength(4),
    __metadata("design:type", String)
], GroupCreateDto.prototype, "name", void 0);
__decorate([
    IsString(),
    MaxLength(2048),
    MinLength(4),
    IsOptional(),
    __metadata("design:type", String)
], GroupCreateDto.prototype, "description", void 0);
export class GroupQueryDto {
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
], GroupQueryDto.prototype, "direct", void 0);
export class GroupUpdateDto extends Partial(GroupCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], GroupUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=group.dto.js.map