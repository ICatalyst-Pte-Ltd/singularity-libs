import { Client } from './client';
export declare class Template {
    parentParameters?: string;
    clientID?: string;
    parentTemplateID?: string;
    description?: string;
    language?: string;
    content?: string;
    name?: string;
    createdBy: string;
    created: BigInt;
    objectVersion: BigInt;
    guid: string;
    modified: BigInt;
    modifiedBy?: string;
    Children: Template[];
    Parent?: Template;
    Client?: Client;
}
