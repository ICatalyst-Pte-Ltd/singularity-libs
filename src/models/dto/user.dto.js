import { __decorate, __metadata } from "tslib";
import { IsName, Omit, Partial } from '@icatalyst/js-core';
import { IsEmail, IsNumber, IsOptional, IsString, IsUrl, MaxLength, MinLength, } from 'class-validator';
import { PrismaModel } from '../prisma';
export class UserDto extends Omit(PrismaModel.User, [
    'primaryEmailID',
    'hasCredentials',
    'userName',
    'created',
    'modified',
    'objectVersion',
    'ClientIdentifier',
    'Emails',
    'PrimaryEmail',
]) {
}
export class UserCreateDto {
}
__decorate([
    IsString(),
    IsOptional(),
    MinLength(3),
    MaxLength(64),
    IsName(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "displayName", void 0);
__decorate([
    IsEmail(),
    MinLength(4),
    MaxLength(256),
    __metadata("design:type", String)
], UserCreateDto.prototype, "email", void 0);
__decorate([
    IsString(),
    IsOptional(),
    MinLength(10),
    __metadata("design:type", String)
], UserCreateDto.prototype, "password", void 0);
__decorate([
    IsOptional(),
    IsUrl({
        protocols: ['https'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        allow_fragments: false,
        allow_query_components: true,
    }),
    __metadata("design:type", String)
], UserCreateDto.prototype, "profileImageURI", void 0);
export class UserQueryDto {
}
__decorate([
    IsString(),
    MinLength(4),
    IsOptional(),
    __metadata("design:type", String)
], UserQueryDto.prototype, "email", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UserQueryDto.prototype, "displayName", void 0);
export class UserUpdateDto extends Partial(UserCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], UserUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=user.dto.js.map