import { __decorate, __metadata } from "tslib";
import { Omit, Partial } from '@icatalyst/js-core';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { PrismaModel } from '../prisma';
export const LogEntryTypes = {
    FATAL: 'FATAL',
    ERROR: 'ERROR',
    WARNING: 'WARNING',
    INFO: 'INFO',
    TRACE: 'TRACE',
    DEBUG: 'DEBUG',
};
export class LogEntryDto extends Omit(PrismaModel.LogEntry, [
    'activitydate',
    'logtype',
    'created',
    'modified',
    'objectVersion',
]) {
}
export class LogEntryCreateDto {
}
export class LogEntryQueryDto {
}
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], LogEntryQueryDto.prototype, "traceid", void 0);
export class LogEntryUpdateDto extends Partial(LogEntryCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], LogEntryUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=log-entry.dto.js.map