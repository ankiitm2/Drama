import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzdhY2QwZGM5MTIyZjAyN2VmM2I0NzEzYTQwODkyYSIsInN1YiI6IjY1YjEwZmQ0ZWEzN2UwMDE1MWU0M2VkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gaaGypMvHkWMLMttmOAeMYyfI4MzJeyMBw9ygPSTy8I"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, { headers, params })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}