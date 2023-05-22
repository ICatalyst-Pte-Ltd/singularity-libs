export type SINGULARITY_ENV_VARS = {
    SINGULARITY_API_ROOT: string;
    SINGULARITY_CLIENT_ID: string;
    SINGULARITY_CLIENT_KEY: string;
    SINGULARITY_CLIENT_SECRET: string;
};
export declare function createSingularityAppConfig(envVars: SINGULARITY_ENV_VARS): any;
