import { __decorate, __metadata } from "tslib";
import { Partial } from '@icatalyst/js-core';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class UserSessionDto {
}
export class UserSessionCreateDto {
}
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], UserSessionCreateDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    __metadata("design:type", String)
], UserSessionCreateDto.prototype, "description", void 0);
export class UserSessionQueryDto {
}
export class UserSessionUpdateDto extends Partial(UserSessionCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], UserSessionUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=user-session.dto.js.map