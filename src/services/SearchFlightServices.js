import axios from 'axios';

const FLY_REST_API_URL= 'http://localhost:8080/user/searchFlight';
class SearchFlightService{
    getFly(){
       return axios.get(FLY_REST_API_URL);
    }
}

export default new SearchFlightService();