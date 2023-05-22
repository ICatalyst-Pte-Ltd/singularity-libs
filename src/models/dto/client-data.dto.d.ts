import { UpdateableT } from '@icatalyst/js-core';
export declare class ClientDataDto {
    [key: string]: any;
}
export declare class ClientDataCreateDto {
    [key: string]: any;
}
export declare class ClientDataQueryDto {
}
declare const ClientDataUpdateDto_base: new () => {
    [x: string]: any;
};
export declare class ClientDataUpdateDto extends ClientDataUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export declare class ClientDataUpdateQueryDto {
    merge?: boolean;
}
export declare class ClientDataRawUpdateDto extends ClientDataCreateDto {
}
export {};
