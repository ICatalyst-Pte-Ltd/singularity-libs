import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { IsNumber } from 'class-validator';
import { PrismaModel } from '../prisma';
export class ClientDto extends Omit(PrismaModel.Client, [
    'created',
    'modified',
    'objectVersion',
    'hasCredentials',
    'requireTermsAccepted',
    'ClientOrganisations',
    'ClientIdentifier',
    'ClientData',
    'Licence',
    'AuthProvider',
    'EmailTemplates',
]) {
}
export class ClientCreateDto {
}
export class ClientQueryDto {
}
export class ClientUpdateDto extends Partial(ClientCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], ClientUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=client.dto.js.map