
/** @param {object} x */
export function jsonResponse(x) {
    return new Response(JSON.stringify(x), {
        headers: {
            'content-type': 'application/json; charset=utf-8',
        }
    });
}