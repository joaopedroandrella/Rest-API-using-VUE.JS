import axios from "axios";

const ApiService = {
    init() {
        this.setBaseURL('https://localhost:7260/api/');
    },
    setBaseURL(url) {
        axios.defaults.baseURL = url;
    },
    get(resource) {
        this.init();
        return axios.get(resource);
    }, 
    get(resource, params) {
        this.init();
        return axios.get(resource, { params });
    },     
    post(resource, params) {
        this.init();
        return axios.post(resource, params);
    }, 
    put(resource, params) {
        this.init();
        return axios.put(resource, params);
    },
    delete(resource) {
        this.init();
        return axios.delete(resource);
    }
}

export default ApiService; 