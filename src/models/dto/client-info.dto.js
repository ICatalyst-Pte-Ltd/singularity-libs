import { __decorate, __metadata } from "tslib";
import { Partial } from '@icatalyst/js-core';
import { IsNumber } from 'class-validator';
export class ClientInfoDto {
}
export class ClientInfoCreateDto {
}
export class ClientInfoQueryDto {
}
export class ClientInfoUpdateDto extends Partial(ClientInfoCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], ClientInfoUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=client-info.dto.js.map