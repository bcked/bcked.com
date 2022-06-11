/** @type {import('./__types/[address=address]').RequestHandler} */
export async function get({ params }) {

    // `params.address` comes from [address].js
    // const item = await db.get(params.address);
    const data = {
        nodes: [
            { id: 'A1', category: 'A' },
            { id: 'A2', category: 'A' },
            { id: 'A3', category: 'A' },
            { id: 'B1', category: 'A' },
            { id: 'B2', category: 'A' },
            { id: 'B3', category: 'B' },
            { id: 'B4', category: 'B' },
            { id: 'C1', category: 'B' },
            { id: 'C2', category: 'B' },
            { id: 'C3', category: 'B' },
            { id: 'D1', category: 'B' },
            { id: 'D2', category: 'B' }
        ],
        links: [
            { source: 'A1', target: 'B1', value: 27 },
            { source: 'A1', target: 'B2', value: 9 },
            { source: 'A2', target: 'B2', value: 5 },
            { source: 'A2', target: 'B3', value: 11 },
            { source: 'A3', target: 'B2', value: 12 },
            { source: 'A3', target: 'B4', value: 7 },
            { source: 'B1', target: 'C1', value: 13 },
            { source: 'B1', target: 'C2', value: 10 },
            { source: 'B4', target: 'C2', value: 5 },
            { source: 'B4', target: 'C3', value: 2 },
            { source: 'B1', target: 'D1', value: 4 },
            { source: 'C3', target: 'D1', value: 1 },
            { source: 'C3', target: 'D2', value: 1 }
        ]
    }

    if (data) {
        return {
            body: { data }
        };
    }

    return {
        status: 404
    };
}