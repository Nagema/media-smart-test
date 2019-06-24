const ENDPOINT = '/members';

const fetchMembersData = ({ page, pageSize }) => fetch(`${ENDPOINT}?page=${page}&page_size=${pageSize}`, {
  headers: {
    authorization: 'mediasmart2019'
  }
}).then(response => response.json());

export { fetchMembersData };

