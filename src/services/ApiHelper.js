const API_URL = 'http://127.0.0.1:5000/api';

class ApiHelperService {
  async getCityList() {
    const url = `${API_URL}/catalog/`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) { throw new Error(`ApiHelper getCityList failed, HTTP status ${response.status}`); }

    return await response.json();
  }

  async getPageList(searchParams) {
    const url = new URL(`${API_URL}/page/`);
    const params = new URLSearchParams();
    for (let param in searchParams) params.append(param, searchParams[param]);
    url.search = params.toString();

    let pageList = [];
    do {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) { throw new Error(`ApiHelper getPageList failed, HTTP status ${response.status}`); }

      const data = await response.json();
      pageList = [...pageList, ...data.results];

      if (!data.next) break;
      const next = new URL(data.next);
      url.search = next.search;
    } while (true);

    return pageList;
  }

  async createPage(data) {
    const url = `${API_URL}/page/create/`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) { throw new Error(`ApiHelper createPage failed, HTTP status ${response.status}`); }

    const result = {};
    result.success = response.status === 201;
    result.data = await response.json();
    return result;
  }

  async getPage(id) {
    const url = `${API_URL}/page/detail/${id}/`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`ApiHelper getPage failed, HTTP status ${response.status}`);
    }

    return await response.json();
  };

  async editPage(id, data) {
    const url = `${API_URL}/page/update/${id}/`;
    const response = await fetch(url, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) { throw new Error(`ApiHelper editPage failed, HTTP status ${response.status}`); }

    const result = {};
    result.success = response.status === 200;
    result.data = await response.json();
    return result;
  }
}


export default new ApiHelperService();