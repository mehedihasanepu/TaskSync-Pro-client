import toast from "react-hot-toast";
import useAllTask from "../../../hook/useAllTask";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const AllTask = () => {
    const { tasks, refetch } = useAllTask()
    const axiosPublic = useAxiosPublic()

    const handleUpdateStatus = async (id) => {
        try {

            const newStatus = "onGoing";

            const updateStatus = { newStatus };
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

            <div>
                <h2 className="text-lg lg:text-2xl border-b-2 border-[#C4DFDF]"> To do</h2>
                {
                    tasks?.map((task) =>
                    
                    <div key={task._id}>
                            {
                                task.status === "todo" &&

                                <div className="flex justify-between items-center mt-5 bg-[#F8F6F4] p-2 rounded-lg">

                                    <div>


                                        <h3 className="text-lg font-semibold">{task.title}</h3>
                                        <div className="flex  items-center gap-5">

                                            {/* <h3>{task.descriptions}</h3> */}

                                            {task.descriptions.length > 20 ?
                                                <td>
                                                    <div className="flex items-center">
                                                        <p className="">{task.descriptions.slice(0, 20)}</p>
                                                        <button className="text-blue-700 font-semibold pl-2" onClick={() => document.getElementById('my_modal_3').showModal()}>read more</button>
                                                        <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                                                            <div className="modal-box ">
                                                                <form method="dialog">
                                                                    {/* if there is a button in form, it will close the modal */}
                                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                                </form>
                                                                <h3 className="font-bold text-lg">Details</h3>
                                                                <p className="py-4">{task.descriptions}</p>
                                                            </div>
                                                        </dialog>
                                                    </div>
                                                </td>
                                                :
                                                <td>{task.descriptions}</td>
                                            }
                                            <h3>Deadlines: {task.deadlines}</h3>
                                            <h3>Priority: {task.priority}</h3>
                                        </div>
                                    </div>

                                    <div>
                                        <button onClick={() => handleUpdateStatus(task._id)} className="btn font-medium text-black bg-blue-50  border-x-slate-300 border--stone-300">
                                            <p >On Going</p>
                                        </button>
                                    </div>

                                </div>
                            }
                        </div>
                    )
                }
            </div>
            <div>
                <h2 className="text-lg lg:text-2xl border-b-2 border-[#C4DFDF] mt-10">On Going</h2>
                {
                    tasks?.map((task) =>
                    
                    <div key={task._id}>
                            {
                                task.status === "onGoing" &&

                                <div className="flex justify-between items-center mt-5 bg-[#F8F6F4] p-2 rounded-lg">

                                    <div>


                                        <h3 className="text-lg font-semibold">{task.title}</h3>
                                        <div className="flex  items-center gap-5">

                                            {/* <h3>{task.descriptions}</h3> */}

                                            {task.descriptions.length > 20 ?
                                                <td>
                                                    <div className="flex items-center">
                                                        <p className="">{task.descriptions.slice(0, 20)}</p>
                                                        <button className="text-blue-700 font-semibold pl-2" onClick={() => document.getElementById('my_modal_3').showModal()}>read more</button>
                                                        <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                                                            <div className="modal-box ">
                                                                <form method="dialog">
                                                                    {/* if there is a button in form, it will close the modal */}
                                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                                </form>
                                                                <h3 className="font-bold text-lg">Details</h3>
                                                                <p className="py-4">{task.descriptions}</p>
                                                            </div>
                                                        </dialog>
                                                    </div>
                                                </td>
                                                :
                                                <td>{task.descriptions}</td>
                                            }
                                            <h3>Deadlines: {task.deadlines}</h3>
                                            <h3>Priority: {task.priority}</h3>
                                        </div>
                                    </div>

                                    <div>
                                        <button onClick={() => handleUpdateStatus(task._id)} className="btn font-medium text-black bg-blue-50  border-x-slate-300 border--stone-300">
                                            <p >On Going</p>
                                        </button>
                                    </div>

                                </div>
                            }
                        </div>
                    )
                }
            </div>
           

        </div>
    );
};

export default AllTask;