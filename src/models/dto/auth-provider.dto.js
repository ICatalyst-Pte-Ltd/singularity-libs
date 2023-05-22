import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, } from 'class-validator';
import { PrismaModel } from '../prisma';
export class AuthProviderDto extends Omit(PrismaModel.AuthProvider, [
    'created',
    'modified',
    'objectVersion',
    'Client',
    'Organisation',
    'urls',
    'provider',
]) {
}
export class AuthProviderCreateDto {
}
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], AuthProviderCreateDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], AuthProviderCreateDto.prototype, "description", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], AuthProviderCreateDto.prototype, "providerType", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], AuthProviderCreateDto.prototype, "organisationID", void 0);
__decorate([
    IsObject(),
    __metadata("design:type", Object)
], AuthProviderCreateDto.prototype, "urls", void 0);
__decorate([
    IsObject(),
    __metadata("design:type", Object)
], AuthProviderCreateDto.prototype, "provider", void 0);
export class AuthProviderQueryDto {
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], AuthProviderQueryDto.prototype, "organisationID", void 0);
export class AuthProviderUpdateDto extends Partial(AuthProviderCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], AuthProviderUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=auth-provider.dto.js.map