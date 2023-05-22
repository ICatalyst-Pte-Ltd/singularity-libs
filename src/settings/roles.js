import { flattenRoles } from '@icatalyst/js-core';
import environment from './environments';
const appRoles = {
    admin: [environment.roleGUIDMap.admin, 'user'],
    developer: [environment.roleGUIDMap.developer, 'user'],
    user: ['user'], //roleGUIDMap.user],
};
export const roleMap = flattenRoles(appRoles);
//# sourceMappingURL=roles.js.map