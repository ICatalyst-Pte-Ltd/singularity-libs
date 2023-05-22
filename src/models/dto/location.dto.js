import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { IsNumber } from 'class-validator';
import { PrismaModel } from '../prisma';
export class LocationDto extends Omit(PrismaModel.Location, [
    'created',
    'modified',
    'objectVersion',
]) {
}
export class LocationCreateDto {
}
export class LocationQueryDto {
}
export class LocationUpdateDto extends Partial(LocationCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], LocationUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=location.dto.js.map