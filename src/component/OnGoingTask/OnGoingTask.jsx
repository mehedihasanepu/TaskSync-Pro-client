/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import Select from 'react-select'
import { MdDelete } from "react-icons/md";

const OnGoingTask = ({ task, refetch }) => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit } = useForm();
    const [priority, setPriority] = useState(task.priority)
    const { user } = useAuth();



    const options = [
        { value: 'High', label: 'High' },
        { value: 'Moderate', label: 'Moderate' },
        { value: 'Low', label: 'Low' }
    ]

    const handleSelect = (value) => {
        setPriority(value.label);
    }






    const handleUpdateStatusComplete = async (id) => {
        try {

            
            const taskItem = {
                title: task.title,
                priority: priority,
                descriptions: task.descriptions,
                deadlines: task.deadlines,
                status: "complete",
                email: user.email
            }
            const updateTask = { taskItem };
            console.log(updateTask);

            const res = await axiosPublic.patch(`/allTask/${id}`, updateTask);
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

    const onSubmit = async (data) => {

        const taskItem = {
            title: data.title,
            priority: priority,
            descriptions: data.descriptions,
            deadlines: data.deadlines,
            status: "onGoing",
            email: user.email
        }
        console.log(taskItem);
        const updateTask = { taskItem };
        const res = await axiosPublic.patch(`/allTask/${task._id}`, updateTask);
        console.log(res.data);


        if (res.data.modifiedCount > 0) {
            toast.success('Update Task');
            refetch();
            document.getElementById(task._id).close()

        }

    }


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
        <div className="flex justify-between bg-[#F8F6F4]  items-center mt-5 p-2 rounded-lg">
            <div className="flex items-center gap-5 ">

                <div>

                    <input type="checkbox" className="checkbox border-2" onClick={() => handleUpdateStatusComplete(task._id)} />
                </div>
                <div className="flex justify-between items-center">


                    <div>

                        <h3 className="text-lg font-semibold">{task.title}</h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">

                            {/* <h3>{task.descriptions}</h3> */}

                            {task.descriptions.length > 20 ?

                                <div className="flex items-center">
                                    <p >{task.descriptions.slice(0, 20)}</p>
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

            </div>
            <div className="flex justify-end gap-2">
                <button className="text-blue-700 font-semibold pl-2" onClick={() => document.getElementById(task._id).showModal()}><FaEdit className="text-xl text-[#239696]"></FaEdit></button>
                <dialog id={task._id} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box ">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Title*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={task.title}
                                        {...register('title', { required: true })}
                                        required
                                        className="input input-bordered w-full" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Descriptions</span>
                                    </label>
                                    <textarea {...register('descriptions')} className="textarea textarea-bordered h-24" defaultValue={task.descriptions}></textarea>
                                </div>


                                <div className="flex gap-6">


                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Deadlines *</span>
                                        </label>
                                        <input
                                            type="date"
                                            {...register('deadlines', { required: true })}
                                            required
                                            className="input input-bordered" />
                                    </div>


                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text">Priority*</span>
                                        </label>
                                        <Select onChange={handleSelect} options={options} defaultValue={options.find(option => option.value === task.priority)} />


                                    </div>

                                </div>


                                <div className="flex justify-center items-center mt-10">

                                    <button className="btn bg-[#D2E9E9] " type="submit">
                                        Update Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>



                <button><MdDelete className="text-[24px] text-[#239696]"
                    onClick={() => handleDeleteTask(task._id)}
                ></MdDelete></button>
            </div>


        </div>
    );
};

export default OnGoingTask;