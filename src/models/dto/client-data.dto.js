import { __decorate, __metadata } from "tslib";
import { Partial } from '@icatalyst/js-core';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';
export class ClientDataDto {
}
export class ClientDataCreateDto {
}
export class ClientDataQueryDto {
}
export class ClientDataUpdateDto extends Partial(ClientDataCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], ClientDataUpdateDto.prototype, "objectVersion", void 0);
export class ClientDataUpdateQueryDto {
}
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], ClientDataUpdateQueryDto.prototype, "merge", void 0);
export class ClientDataRawUpdateDto extends ClientDataCreateDto {
}
//# sourceMappingURL=client-data.dto.js.map