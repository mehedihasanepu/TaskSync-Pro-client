import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useAllTask = () => {
    const { user } = useAuth();

    const axiosPublic = useAxiosPublic()
    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ["tasks",user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allTasks/currentUserTask?email=${user.email}`);
            return res.data;
        }
    });
    return { tasks, isLoading, refetch };
};

export default useAllTask;