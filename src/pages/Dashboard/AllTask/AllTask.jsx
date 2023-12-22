
import useAllTask from "../../../hook/useAllTask";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import TodoTask from "../../../component/TodoTask/TodoTask";
import OnGoingTask from "../../../component/OnGoingTask/OnGoingTask";
import CompleteTask from "../../../component/CompleteTask/CompleteTask";
const AllTask = () => {
    const { tasks, refetch } = useAllTask()
    const [showCompleteTask, setShowCompleteTask] = useState(false)



    return (
        <div>
            <div>
                <h2 className="text-lg lg:text-2xl border-b-2 border-[#C4DFDF] mt-5 pb-2"> To do</h2>
                {
                    tasks?.map((task) =>

                        <div key={task._id}>
                            {
                                task.status === "todo" &&

                                <TodoTask task={task} refetch={refetch}>

                                </TodoTask>
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

                                <OnGoingTask task={task} refetch={refetch}></OnGoingTask>
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

                                        <CompleteTask task={task} refetch={refetch}></CompleteTask>
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