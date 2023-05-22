import { __decorate, __metadata } from "tslib";
import { Partial } from '@icatalyst/js-core';
import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, } from 'class-validator';
export class NotificationDto {
}
export class NotificationCreateDto {
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], NotificationCreateDto.prototype, "topic", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], NotificationCreateDto.prototype, "title", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], NotificationCreateDto.prototype, "body", void 0);
__decorate([
    IsOptional(),
    IsObject(),
    __metadata("design:type", Object)
], NotificationCreateDto.prototype, "data", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], NotificationCreateDto.prototype, "image", void 0);
export class NotificationQueryDto {
}
export class NotificationUpdateDto extends Partial(NotificationCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], NotificationUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=notification.dto.js.map