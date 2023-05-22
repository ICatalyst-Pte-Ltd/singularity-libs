import { UpdateableT } from '@icatalyst/js-core';
export declare class UserSessionDto {
    id: string;
    data: any;
    guid: string;
    user: {
        profileuri: string | null;
        profileimageuri: string;
        userid: string;
        displayname: string;
        roles: {
            accessrole: boolean;
            code: string;
            mutuallyexclusive: boolean;
            displayable: boolean;
            name: string;
            featurerole: string;
            guid: string;
        }[];
    };
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class UserSessionCreateDto {
    name: string;
    description?: string;
}
export declare class UserSessionQueryDto {
}
declare const UserSessionUpdateDto_base: new () => {
    name?: string | undefined;
    description?: string | undefined;
};
export declare class UserSessionUpdateDto extends UserSessionUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
