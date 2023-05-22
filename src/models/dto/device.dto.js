import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { IsNumber } from 'class-validator';
import { PrismaModel } from '../prisma';
export class DeviceDto extends Omit(PrismaModel.Device, [
    'created',
    'modified',
    'objectVersion',
]) {
}
export class DeviceCreateDto {
}
export class DeviceQueryDto {
}
export class DeviceUpdateDto extends Partial(DeviceCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], DeviceUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=device.dto.js.map