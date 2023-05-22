import { __decorate, __metadata } from "tslib";
import { Partial } from '@icatalyst/js-core';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class OIDCConnectorDto {
}
export class OIDCConnectorCreateDto {
}
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], OIDCConnectorCreateDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    __metadata("design:type", String)
], OIDCConnectorCreateDto.prototype, "description", void 0);
export class OIDCConnectorQueryDto {
}
export class OIDCConnectorUpdateDto extends Partial(OIDCConnectorCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], OIDCConnectorUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=oidc-connector.dto.js.map