/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    return /^0x[a-fA-F0-9]{40}$/.test(param);
}