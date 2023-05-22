declare const environment: {
    name: "production" | "staging" | "development";
    roleGUIDMap: {
        admin: string;
        developer: string;
        user: string;
    } & ({
        admin: string;
        developer: string;
        user: string;
    } | {
        admin: string;
        developer: string;
        user: string;
    } | {
        admin: string;
        developer: string;
        user: string;
    });
};
export default environment;
