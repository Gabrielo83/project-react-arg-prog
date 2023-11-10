import TaskItem from "../components/TaskItem";

//1) Las establecemos manualmente HARDCODEADO
// const taskList = [
//   {
//     id: 1,
//     title: "Estudiar JS",
//     done: true,
//   },
//   {
//     id: 2,
//     title: "Estudiar React",
//     done: false,
//   },
//   {
//     id: 3,
//     title: "Estudiar Mongoose",
//     done: true,
//   },
//   {
//     id: 4,
//     title: "Estudiar Mongodb",
//     done: true,
//   },
// ];

//--------------EJEMPLO FUERA DEL COMPONENTE
// const tasks = taskList.map((task) => (
//   <TaskItem
// key={`task-key-${task.id}`}
// id={task.id}
// title={task.title}
// done={task.done}
//   />
// ));

// const TaskPg = () => {
//   return <>{tasks}</>;
// };

// export default TaskPg;

//-------------EJEMPLO DENTRO DEL COMPONENTE
// const TaskPg = () => {
//   return (
//     <div className="row">
//       {taskList.map((task) => {
//         return (
// <TaskItem
//   key={`task-key-${task.id}`}
//   id={task.id}
//   title={task.title}
//   done={task.done}
// />
//         );
//       })}
//     </div>
//   );
// };

// export default TaskPg;

//USO DEL useEffect
import { useState, useEffect } from "react";

const TaskPg = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
 
  const todo = tasks.map((task) => (
    <TaskItem
      key={`task-key-${task.id}`}
      id={task.id}
      title={task.title}
      done={task.completed}
    />
  ));

  return <div className="row">{todo}</div>;
};

export default TaskPg;
