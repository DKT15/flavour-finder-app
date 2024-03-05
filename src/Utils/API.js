import axios from "axios";
const BASEURL ="https://flavourfinder.tjthouhid.com/restaurent.php?t=";
const APIKEY = "api_key=tj120rrgssqqaa";

export default{
    search: function(query){
        return axios.get(BASEURL + query + APIKEY);
    }
};