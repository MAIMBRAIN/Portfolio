import axios from "axios";

const repoURL = "https:api.github.com/users/maimbrain/repos";
export default{
    repos: function(data)
    {
        return axios.get(repoURL, data);
    }
}