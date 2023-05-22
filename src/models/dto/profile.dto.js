import { __decorate, __metadata } from "tslib";
import { Partial } from '@icatalyst/js-core';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
// export class ClientInfoDto extends Omit(PrismaModel.ClientInfo, [
//   'created',
//   'modified',
//   'objectVersion',
// ]) {
export class ProfileDto {
}
export class ProfileCreateDto {
}
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], ProfileCreateDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    __metadata("design:type", String)
], ProfileCreateDto.prototype, "description", void 0);
export class ProfileQueryDto {
}
export class ProfileUpdateDto extends Partial(ProfileCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], ProfileUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=profile.dto.js.map