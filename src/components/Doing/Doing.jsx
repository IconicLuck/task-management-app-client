import { useEffect, useState } from "react";
import SingleDoingTask from "../SingleDoingTask.jsx/SingleDoingTask";


const Doing = () => {

    const [allDoingTasks, setAllDoingTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allDoingTasks')
        .then(res => res.json())
        .then(data => setAllDoingTasks(data))
    }, [])

    return (
        <div className="w-9/12 mx-auto grid grid-cols-3 mt-10 gap-10">
            {allDoingTasks.map(singleDoingTask => <SingleDoingTask
                key={singleDoingTask._id}
                singleDoingTask={singleDoingTask}
            ></SingleDoingTask>)}
        </div>
    );
};

export default Doing;