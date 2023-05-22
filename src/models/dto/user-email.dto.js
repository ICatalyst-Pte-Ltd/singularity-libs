import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { IsNumber } from 'class-validator';
import { PrismaModel } from '../prisma';
export class UserEmailDto extends Omit(PrismaModel.UserEmail, [
    'created',
    'modified',
    'objectVersion',
]) {
}
export class UserEmailCreateDto {
}
export class UserEmailQueryDto {
}
export class UserEmailUpdateDto extends Partial(UserEmailCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], UserEmailUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=user-email.dto.js.map