import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
    // Every single request I wanna send is having the same starting URL like above 
})

// instance.get('/foo-bar') , if we place a get request
// This will be like https://api.themoviedb.org/3/foo-bar

export default instance;