import { ThemeDeclaration, UpdateableT } from '@icatalyst/js-core';
import { OrganisationDto } from './organisation.dto';
export declare class ClientInfoDto {
    id: string;
    client: {
        name: string;
        logo: string;
        description: string;
        featureImage: string;
        applicationURL: string;
        tAndCUrls: {
            terms: string | null;
            privacy: string | null;
        };
        author: {
            name: string;
            logo: string;
            url: string;
        };
    };
    themes: {
        [key: string]: ThemeDeclaration;
    };
    clientIdentifier?: string;
    organisations?: OrganisationDto[];
}
export declare class ClientInfoCreateDto {
    [key: string]: any;
}
export declare class ClientInfoQueryDto {
}
declare const ClientInfoUpdateDto_base: new () => {
    [x: string]: any;
};
export declare class ClientInfoUpdateDto extends ClientInfoUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
