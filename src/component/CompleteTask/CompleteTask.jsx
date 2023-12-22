/* eslint-disable react/prop-types */


const CompleteTask = ({ task, refetch }) => {
    return (
        <div>
            <div className="flex items-center gap-5 mt-5 bg-[#F8F6F4] p-2 rounded-lg">

                <div>

                    <input type="checkbox" checked={task.status === "complete" ? "checked" : ""} className="checkbox border-2" onClick={() => handleUpdateStatusComplete(task._id)} />
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
        </div>
    );
};

export default CompleteTask;