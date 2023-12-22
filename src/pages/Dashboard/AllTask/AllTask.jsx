import toast from "react-hot-toast";
import useAllTask from "../../../hook/useAllTask";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
const AllTask = () => {
    const { tasks, refetch } = useAllTask()
    const axiosPublic = useAxiosPublic()
    const [showCompleteTask, setShowCompleteTask] = useState(false)

    const handleUpdateStatusOngoing = async (id) => {
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
    const handleUpdateStatusComplete = async (id) => {
        try {

            const newStatus = "complete";

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


    const handleDeleteTask = (id) => {
        Swal.fire({
            title: "Are you sure to delete this task?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/task/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your task has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };


    return (
        <div>
            <div>
                <h2 className="text-lg lg:text-2xl border-b-2 border-[#C4DFDF] mt-5 pb-2"> To do</h2>
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

                                    <div className="flex gap-2">
                                            <button><FaEdit className="text-xl text-[#239696]"
                                            ></FaEdit></button>


                                            <button><MdDelete className="text-[24px] text-[#239696]"
                                                onClick={() => handleDeleteTask(task._id)}
                                            ></MdDelete></button>

                                        <button onClick={() => handleUpdateStatusOngoing(task._id)} className="btn font-medium text-black bg-[#D2E9E9] border-[#C4DFDF]">
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
                <h2 className="text-lg lg:text-2xl border-b-2 border-[#C4DFDF] mt-10 pb-2" >On Going</h2>
                {
                    tasks?.map((task) =>

                        <div key={task._id}>
                            {
                                task.status === "onGoing" &&

                                <div className="flex items-center gap-5 mt-5 bg-[#F8F6F4] p-2 rounded-lg">

                                    <div>

                                        <input type="checkbox" className="checkbox border-2" onClick={() => handleUpdateStatusComplete(task._id)} />
                                    </div>
                                    <div>


                                        <h3 className="text-lg font-semibold">{task.title}</h3>
                                        <div className="flex  items-center gap-5">

                                            {/* <h3>{task.descriptions}</h3> */}

                                            {task.descriptions.length > 20 ?

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

                                                :
                                                <p>{task.descriptions}</p>
                                            }
                                            <h3>Deadlines: {task.deadlines}</h3>
                                            <h3>Priority: {task.priority}</h3>
                                        </div>
                                    </div>


                                </div>
                            }
                        </div>
                    )
                }
            </div>


            <div>
                <div onClick={() => setShowCompleteTask(!showCompleteTask)} className="flex justify-between items-center border-b-2 border-[#C4DFDF] mt-10 cursor-pointer pb-2">

                    <p className="text-lg lg:text-2xl ">Complete Task </p>
                    <p className="text-2xl">
                        {showCompleteTask ? <IoIosArrowUp ></IoIosArrowUp > : <IoIosArrowDown></IoIosArrowDown>}
                    </p>
                </div>
                {
                    showCompleteTask &&
                    <div>
                        {
                            tasks?.map((task) =>

                                <div key={task._id}>
                                    {
                                        task.status === "complete" &&

                                        <div className="flex items-center gap-5 mt-5 bg-[#F8F6F4] p-2 rounded-lg">

                                            <div>

                                                    <input type="checkbox" checked={task.status === "complete" ? "checked":""} className="checkbox border-2" onClick={() => handleUpdateStatusComplete(task._id)} />
                                            </div>
                                            <div>


                                                <h3 className="text-lg font-semibold">{task.title}</h3>
                                                <div className="flex  items-center gap-5">

                                                    {/* <h3>{task.descriptions}</h3> */}

                                                    {task.descriptions.length > 20 ?

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

                                                        :
                                                        <p>{task.descriptions}</p>
                                                    }
                                                    <h3>Deadlines: {task.deadlines}</h3>
                                                    <h3>Priority: {task.priority}</h3>
                                                </div>
                                            </div>


                                        </div>
                                    }
                                </div>
                            )
                        }
                    </div>
                }
            </div>

        </div>
    );
};

export default AllTask;