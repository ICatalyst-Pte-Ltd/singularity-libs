import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { IsNumber } from 'class-validator';
import { PrismaModel } from '../prisma';
export class RelationshipTypeDto extends Omit(PrismaModel.EdgeType, [
    'created',
    'modified',
    'objectVersion',
]) {
}
export class RelationshipTypeCreateDto {
}
export class RelationshipTypeQueryDto {
}
export class RelationshipTypeUpdateDto extends Partial(RelationshipTypeCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], RelationshipTypeUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=relationship-type.dto.js.map