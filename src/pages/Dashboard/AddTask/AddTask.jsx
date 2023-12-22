import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Select from 'react-select'
import { useState } from "react";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";
import { useNavigate } from "react-router-dom";


const AddTask = () => {
    const { register, handleSubmit, reset } = useForm();
    const [priority, setPriority] = useState('')
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth();
    const navigate = useNavigate()


    const options = [
        { value: 'High', label: 'High' },
        { value: 'Moderate', label: 'Moderate' },
        { value: 'Low', label: 'Low' }
    ]

    const handleSelect = (value) => {
        setPriority(value.label);
    }

    const onSubmit = async (data) => {

        const taskItem = {
            title: data.title,
            priority: priority,
            descriptions: data.descriptions,
            deadlines: data.deadlines,
            status: "todo",
            email: user.email



        }
        console.log(taskItem);

        const taskRes = await axiosPublic.post('/addTask', taskItem);
        console.log(taskRes.data);

        if (taskRes.data.insertedId) {
            // show success popup
            reset();
            navigate('/dashboard/allTask')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `The Task ${data.title} is added .`,
                showConfirmButton: false,
                timer: 1500
            });

        }

    }


    return (
        <div>
            <div className="mx-auto text-center md:w-3/12 ">
                <h3 className="text-lg lg:text-2xl uppercase font-semibold border-y-2 border-[#C4DFDF] py-2 ">Add Task</h3>
            </div>


            <div className="mx-20">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder=" Task Title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Descriptions</span>
                        </label>
                        <textarea {...register('descriptions')} className="textarea textarea-bordered h-24" placeholder="Task Descriptions"></textarea>
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
                            <Select onChange={handleSelect} options={options} />

                        </div>

                    </div>


                    <div className="flex justify-center items-center mt-10">

                        <button className="btn bg-[#D2E9E9] " type="submit">
                            Add Task
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddTask;