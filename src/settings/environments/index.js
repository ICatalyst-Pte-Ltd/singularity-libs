import { roleGUIDMap } from './environment';
import { roleGUIDMap as roleGUIDMapDev } from './environment.development';
import { roleGUIDMap as roleGUIDMapStaging } from './environment.staging';
import { roleGUIDMap as roleGUIDMapProd } from './environment.production';
import { _ } from '@icatalyst/js-core';
const guidMap = {
    production: roleGUIDMapProd,
    staging: roleGUIDMapStaging,
    development: roleGUIDMapDev,
};
const env = (process.env['NODE_ENV'] || 'development');
const environment = {
    name: env,
    roleGUIDMap: _.merge({}, roleGUIDMap, guidMap[env]),
};
export default environment;
//# sourceMappingURL=index.js.map