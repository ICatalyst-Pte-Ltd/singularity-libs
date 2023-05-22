import { __decorate, __metadata } from "tslib";
import { IsGreaterThan, Omit, Partial } from '@icatalyst/js-core';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, } from 'class-validator';
import { PrismaModel } from '../prisma';
import { Transform } from 'class-transformer';
export class PersonalAccessTokenDto extends Omit(PrismaModel.PersonalAccessToken, ['created', 'modified', 'objectVersion']) {
}
export class PersonalAccessTokenCreateDto {
}
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], PersonalAccessTokenCreateDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(new Date().getTime() - 1000 * 60 * 60 * 24 * 365 * 10, {}),
    __metadata("design:type", Number)
], PersonalAccessTokenCreateDto.prototype, "start", void 0);
__decorate([
    IsNumber(),
    IsGreaterThan('start'),
    Max(10426947413000),
    IsOptional(),
    __metadata("design:type", Number)
], PersonalAccessTokenCreateDto.prototype, "expiry", void 0);
__decorate([
    IsBoolean(),
    IsOptional(),
    Transform(({ obj, key }) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return obj[key] === 'true';
        }
        return value;
    }),
    __metadata("design:type", Boolean)
], PersonalAccessTokenCreateDto.prototype, "enabled", void 0);
export class PersonalAccessTokenQueryDto {
}
export class PersonalAccessTokenUpdateDto extends Partial(PersonalAccessTokenCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], PersonalAccessTokenUpdateDto.prototype, "objectVersion", void 0);
// {"name":"Test Token","start":1683606460000,"expiry":1685075260000,"enabled":true,"audience":"https://platform.sensemaker-suite.com"}
//# sourceMappingURL=personal-access-token.dto.js.map