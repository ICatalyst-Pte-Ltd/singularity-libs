import { UpdateableT } from '@icatalyst/js-core';
export declare class ProfileDto {
    id: string;
    displayname: string;
    guid: string;
    hascredentials: boolean;
    primaryemailid: string;
    profileimageuri: string;
    profileuri: string;
    username: string;
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class ProfileCreateDto {
    name: string;
    description?: string;
}
export declare class ProfileQueryDto {
}
declare const ProfileUpdateDto_base: new () => {
    name?: string | undefined;
    description?: string | undefined;
};
export declare class ProfileUpdateDto extends ProfileUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
