import axios from "axios";

 const axiosPublic = axios.create({
     baseURL: 'https://task-sync-pro-server-xi.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;




