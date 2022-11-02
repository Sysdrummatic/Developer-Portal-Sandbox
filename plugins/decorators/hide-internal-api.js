module.exports = HideInternal;

/** @type {import('@redocly/openapi-cli').OasDecorator} */
/**
 @returns {import("@redocly/openapi-core/lib/visitors").Oas3Visitor}
 */
function HideInternal() {
    return {
        DefinitionRoot: {
            leave(ctx) {
                if (ctx.parameter.hasOwnProperty("x-cdq-internal")) {
                    if (ctx['x-cdq-internal'] === true) {
                        ctx['x-public'] = ["false"]
                        ctx['x-hide'] = ["true"]

                    }
                }
            }
        }
    }
};