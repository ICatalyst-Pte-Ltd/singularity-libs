import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';
import { PrismaModel } from '../prisma';
export class LicenceKeyDto extends Omit(PrismaModel.LicenceKey, [
    'created',
    'modified',
    'objectVersion',
    'applied',
    'Licence',
    'Organisation',
]) {
}
export class LicenceKeyCreateDto {
}
__decorate([
    IsNumber(),
    Min(1),
    Max(3650),
    IsOptional(),
    __metadata("design:type", Number)
], LicenceKeyCreateDto.prototype, "duration", void 0);
export class LicenceKeyQueryDto {
}
export class LicenceKeyUpdateDto extends Partial(LicenceKeyCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], LicenceKeyUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=licence-key.dto.js.map