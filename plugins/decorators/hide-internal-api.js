module.exports = HideInternal;

/** @type {import('@redocly/openapi-cli').OasDecorator} */

function HideInternal() {
    return {
        // DefinitionRoot: {
        //     leave(ctx) {
        //         if (ctx.hasOwnProperty("x-cdq-hide")) {
        //             if (ctx["x-cdq-security"] === true) {
        //                 ctx['security'] = [{'oAuth2': []}]
        //                 ctx['components']['securitySchemes'] =
        //                     {
        //                         'oAuth2': {
        //                             'type': 'oauth2',
        //                             "flows": {
        //                                 "clientCredentials": {
        //                                     "x-tokenEndpointAuthMethod": "client_secret_basic",
        //                                     "tokenUrl": "https://id.cdq.com/auth/realms/cs/protocol/openid-connect/token",
        //                                     "scopes": {}
        //                                 }
        //                             }
        //                         }
        //                     }
        //             }
        //         }
        //     }
        // }
    }
};