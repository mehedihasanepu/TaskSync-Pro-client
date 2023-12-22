import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllTask = () => {

    const axiosPublic = useAxiosPublic()
    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await axiosPublic.get('/allTasks');
            return res.data;
        }
    });
    return { tasks, isLoading, refetch };
};

export default useAllTask;