import toast from "react-hot-toast";
import useAllTask from "../../../hook/useAllTask";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const AllTask = () => {
    const { tasks,refetch } = useAllTask()
    const axiosPublic = useAxiosPublic()

    const handleUpdateStatus = async (id) => {
        try {

            const newStatus = "onGoing";

            const updateStatus = { newStatus};
            console.log(updateStatus);

            const res = await axiosPublic.patch(`/allTask/${id}`, updateStatus);
            console.log(res.data);

            if (res.data.modifiedCount > 0) {
                toast.success('Update Status');
                refetch();
            }
        } catch (error) {
            console.error(error);
            toast.error('Error occurred while update status');
        }
    };



    return (
        <div>
            <div className="mx-auto text-center md:w-3/12 ">
                <h3 className="text-lg lg:text-2xl uppercase font-semibold border-y-2 border-[#C4DFDF] py-2 ">All Task</h3>
            </div>

            <h2 className="text-lg lg:text-2xl "> Total Task: {tasks.length}</h2>
            <div>
                {
                    tasks.map((task, index) => <div key={task._id} className="flex justify-between items-center mt-5 ">

                        <div className="flex  items-center gap-5">

                            <h3>{index + 1}</h3>
                            <h3>{task.title}</h3>
                            <h3>{task.descriptions}</h3>
                            <h3>Deadlines: {task.deadlines}</h3>
                            <h3>Priority: {task.priority}</h3>
                        </div>

                        <div>
                            <button onClick={() => handleUpdateStatus(task._id)} className="btn font-medium text-black bg-blue-50  border-x-slate-300 border--stone-300">
                                <p >On Going</p>
                            </button>
                        </div>

                    </div>)
                }



            </div>

        </div>
    );
};

export default AllTask;