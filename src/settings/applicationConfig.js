import _ from 'lodash';
import { colors } from './colors';
export function createSingularityAppConfig(envVars) {
    return _.merge({
        environment: 'dev',
        name: 'Singularity',
        description: `Singularity is an OAuth 2.0 identity provider that uses graph structures and relationships to authenticate and authorise users. Enabling fine grained access control, group and organisational management and resource level access constraints.
  The intent of singularity is to ensure end users are aware of what data is being accessed as well as giving them control over how their data is used and shared.`,
        keywords: 'Identity, federation, single sign on, oauth, open connect, authorisation, authentication',
        featureImage: 'images/backgrounds/dark-material-bg.jpg',
        frontEndDocs: 'https://dev-docs.icatalyst.com/dev/apps/singularity/storybook/index.html',
        apiDocs: 'https://api.singularity.icatalyst.com/openapi',
        sourceDocs: '',
        website: 'https://singularity.icatalyst.com',
        repo: '',
        favIcon: 'logos/favicon-96x96.png',
        logo: 'logos/singularity-logo.png',
        company_name: 'ICatalyst',
        company_logo: 'logos/icatalyst_logo.png',
        company_url: 'https://icatalyst.com',
        ga_tag_id: 'gtag',
        colors: colors,
        themeMode: 'light',
        singularity: {
            apiRoot: envVars.SINGULARITY_API_ROOT || 'https://api.singularity.icatalyst.com',
            clientID: envVars.SINGULARITY_CLIENT_ID || 'not specified',
            clientKey: envVars.SINGULARITY_CLIENT_KEY || 'not specified',
            clientSecret: envVars.SINGULARITY_CLIENT_SECRET || 'not specified',
        },
    });
}
//# sourceMappingURL=applicationConfig.js.map