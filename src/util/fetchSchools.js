const API_URL = 'https://catalogue.data.govt.nz/api/action/datastore_search';
const RESOURCE_ID = '20b7c271-fd5a-4c9e-869b-481a0e2453cd';

export const fetchSchools = async (query, limit, offset) => {
    const q = query ? JSON.stringify({ Org_Name: query }) : '';
    const params = new URLSearchParams({
        resource_id: RESOURCE_ID,
        q,
        limit,
        offset
    });
    const res = await fetch(`${API_URL}?${params}`);

    return res.json();
}
