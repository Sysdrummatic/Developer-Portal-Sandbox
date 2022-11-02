const ReplaceSecurity = require('./decorators/replace-security');
const id = 'security';

/** @type {import('@redocly/openapi-cli').CustomRulesConfig} */
const decorators = {
    oas3: {
        'replace-security': ReplaceSecurity,
    },
};

module.exports = {
    id,
    decorators,
};