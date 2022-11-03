const HideInternal = require('./decorators/hide-internal-api.j');
const id = 'hide-internal';

/** @type {import('@redocly/openapi-cli').CustomRulesConfig} */
const decorators = {
    oas3: {
        'hide-internal-api': HideInternal,
    },
};

module.exports = {
    id,
    decorators,
};