import { Licence } from './licence';
export declare class LicenceConstraint {
    licenceID: string;
    constraintType: string;
    intVal?: number;
    boolVal?: boolean;
    floatVal?: number;
    longVal?: BigInt;
    stringVal?: string;
    jsonVal?: object;
    guid: string;
    createdBy: string;
    created: BigInt;
    objectVersion: BigInt;
    modified: BigInt;
    modifiedBy: string;
    Licence: Licence;
}
