module.exports = HideInternal;
/**
 @returns {import("@redocly/openapi-core/lib/visitors").Oas3Visitor}
 */
function HideInternal() {
    return {
        // Operation: {
        //     leave(ctx) {
        //         console.log(ctx)
        //         if (ctx.hasOwnProperty("x-cdq-internal")) {
        //             if (ctx['x-cdq-internal'] === true) {
        //                 ctx['x-public'] = ["false"]
        //                 ctx['x-hide'] = ["true"]
        //
        //             }
        //         }
        //     }
        // }
    }
};