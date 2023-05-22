import { UpdateableT } from '@icatalyst/js-core';
export declare class NotificationDto {
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class NotificationCreateDto {
    topic: string;
    title: string;
    body: string;
    data?: {
        [key: string]: string;
    };
    image?: string;
}
export declare class NotificationQueryDto {
}
declare const NotificationUpdateDto_base: new () => {
    topic?: string | undefined;
    title?: string | undefined;
    body?: string | undefined;
    data?: {
        [key: string]: string;
    } | undefined;
    image?: string | undefined;
};
export declare class NotificationUpdateDto extends NotificationUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
