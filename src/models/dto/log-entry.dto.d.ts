import { UpdateableT } from '@icatalyst/js-core';
import { PrismaModel } from '../prisma';
export declare const LogEntryTypes: {
    readonly FATAL: "FATAL";
    readonly ERROR: "ERROR";
    readonly WARNING: "WARNING";
    readonly INFO: "INFO";
    readonly TRACE: "TRACE";
    readonly DEBUG: "DEBUG";
};
export type LogEntryType = typeof LogEntryTypes[keyof typeof LogEntryTypes];
declare const LogEntryDto_base: new () => Omit<PrismaModel.LogEntry, "created" | "modified" | "objectVersion" | "activitydate" | "logtype">;
export declare class LogEntryDto extends LogEntryDto_base {
    activitydate: number;
    logtype?: LogEntryType;
    created: number;
    modified: number;
    objectVersion: number;
}
export declare class LogEntryCreateDto {
    traceid: string;
    code: string;
    logtype: LogEntryType;
    clientid: string;
    activitydate: number;
    entry?: string;
}
export declare class LogEntryQueryDto {
    traceid?: string;
}
declare const LogEntryUpdateDto_base: new () => {
    traceid?: string | undefined;
    code?: string | undefined;
    logtype?: LogEntryType | undefined;
    clientid?: string | undefined;
    activitydate?: number | undefined;
    entry?: string | undefined;
};
export declare class LogEntryUpdateDto extends LogEntryUpdateDto_base implements UpdateableT {
    objectVersion: number;
}
export {};
