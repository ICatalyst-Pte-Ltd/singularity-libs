import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
declare const KnowledgeBaseDto_base: new () => Omit<PrismaModel.KnowledgeBase, "created" | "modified" | "objectVersion" | "tags" | "keywords" | "authRoles" | "includeInKB" | "includeInTips" | "includeInTour" | "enabled">;
export declare class KnowledgeBaseDto extends KnowledgeBaseDto_base {
    tags?: string[];
    keywords?: string[];
    authRoles?: string[];
    includeInKB: boolean;
    includeInTips: boolean;
    includeInTour: boolean;
    enabled: boolean;
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class KnowledgeBaseCreateDto {
    mediaUrl?: string;
    featureImageUrl?: string;
    additionalData?: string;
    authRoles?: string[];
    tourControlID?: string;
    includeInTour?: boolean;
    title: string;
    content?: string;
    tags?: string[];
    category?: string;
    excerpt: string;
    includeInKB: boolean;
    start?: number;
    expiry?: number;
    includeInTips: boolean;
    enabled: boolean;
}
export declare class KnowledgeBaseQueryDto {
}
declare const KnowledgeBaseUpdateDto_base: new () => {
    mediaUrl?: string | undefined;
    featureImageUrl?: string | undefined;
    additionalData?: string | undefined;
    authRoles?: string[] | undefined;
    tourControlID?: string | undefined;
    includeInTour?: boolean | undefined;
    title?: string | undefined;
    content?: string | undefined;
    tags?: string[] | undefined;
    category?: string | undefined;
    excerpt?: string | undefined;
    includeInKB?: boolean | undefined;
    start?: number | undefined;
    expiry?: number | undefined;
    includeInTips?: boolean | undefined;
    enabled?: boolean | undefined;
};
export declare class KnowledgeBaseUpdateDto extends KnowledgeBaseUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
