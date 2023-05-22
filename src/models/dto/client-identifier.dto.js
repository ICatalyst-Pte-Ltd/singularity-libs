import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { PrismaModel } from '../prisma';
export class ClientIdentifierDto extends Omit(PrismaModel.ClientIdentifier, [
    'created',
    'modified',
    'objectVersion',
]) {
}
export class ClientIdentifierCreateDto {
}
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], ClientIdentifierCreateDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    __metadata("design:type", String)
], ClientIdentifierCreateDto.prototype, "description", void 0);
export class ClientIdentifierQueryDto {
}
export class ClientIdentifierUpdateDto extends Partial(ClientIdentifierCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], ClientIdentifierUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=client-identifier.dto.js.map