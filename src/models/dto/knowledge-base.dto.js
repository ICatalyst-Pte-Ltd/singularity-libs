import { __decorate, __metadata } from "tslib";
import { IsGreaterThan, IsHTMLSafe, Omit, Partial, } from '@icatalyst/js-core';
import { Transform } from 'class-transformer';
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Max, MaxLength, Min, ValidateIf, } from 'class-validator';
import { PrismaModel } from '../prisma';
export class KnowledgeBaseDto extends Omit(PrismaModel.KnowledgeBase, [
    'tags',
    'keywords',
    'authRoles',
    'created',
    'modified',
    'objectVersion',
    'includeInKB',
    'includeInTips',
    'includeInTour',
    'enabled',
]) {
}
export class KnowledgeBaseCreateDto {
}
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
    MaxLength(1024),
    __metadata("design:type", String)
], KnowledgeBaseCreateDto.prototype, "mediaUrl", void 0);
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
    MaxLength(1024),
    __metadata("design:type", String)
], KnowledgeBaseCreateDto.prototype, "featureImageUrl", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], KnowledgeBaseCreateDto.prototype, "additionalData", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsString({ each: true }),
    __metadata("design:type", Array)
], KnowledgeBaseCreateDto.prototype, "authRoles", void 0);
__decorate([
    ValidateIf((d) => d.includeInTour === true),
    IsString(),
    IsNotEmpty(),
    MaxLength(256),
    __metadata("design:type", String)
], KnowledgeBaseCreateDto.prototype, "tourControlID", void 0);
__decorate([
    ValidateIf((d) => Boolean(d.tourControlID)),
    IsBoolean(),
    Transform(({ obj, key }) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return obj[key] === 'true';
        }
        return value;
    }),
    __metadata("design:type", Boolean)
], KnowledgeBaseCreateDto.prototype, "includeInTour", void 0);
__decorate([
    IsHTMLSafe(),
    MaxLength(256),
    __metadata("design:type", String)
], KnowledgeBaseCreateDto.prototype, "title", void 0);
__decorate([
    IsOptional(),
    IsHTMLSafe(),
    __metadata("design:type", String)
], KnowledgeBaseCreateDto.prototype, "content", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsString({ each: true }),
    __metadata("design:type", Array)
], KnowledgeBaseCreateDto.prototype, "tags", void 0);
__decorate([
    IsOptional(),
    MaxLength(256),
    __metadata("design:type", String)
], KnowledgeBaseCreateDto.prototype, "category", void 0);
__decorate([
    IsHTMLSafe(),
    MaxLength(2048),
    __metadata("design:type", String)
], KnowledgeBaseCreateDto.prototype, "excerpt", void 0);
__decorate([
    IsBoolean(),
    Transform(({ obj, key }) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return obj[key] === 'true';
        }
        return value;
    }),
    __metadata("design:type", Boolean)
], KnowledgeBaseCreateDto.prototype, "includeInKB", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(new Date().getTime() - 1000 * 60 * 60 * 24 * 365 * 10),
    __metadata("design:type", Number)
], KnowledgeBaseCreateDto.prototype, "start", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    IsGreaterThan('start'),
    Max(10426947413000),
    __metadata("design:type", Number)
], KnowledgeBaseCreateDto.prototype, "expiry", void 0);
__decorate([
    IsBoolean(),
    Transform(({ obj, key }) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return obj[key] === 'true';
        }
        return value;
    }),
    __metadata("design:type", Boolean)
], KnowledgeBaseCreateDto.prototype, "includeInTips", void 0);
__decorate([
    IsBoolean(),
    Transform(({ obj, key }) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return obj[key] === 'true';
        }
        return value;
    }),
    __metadata("design:type", Boolean)
], KnowledgeBaseCreateDto.prototype, "enabled", void 0);
export class KnowledgeBaseQueryDto {
}
export class KnowledgeBaseUpdateDto extends Partial(KnowledgeBaseCreateDto) {
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], KnowledgeBaseUpdateDto.prototype, "objectVersion", void 0);
//# sourceMappingURL=knowledge-base.dto.js.map