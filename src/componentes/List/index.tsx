import React from "react";

import '../../styles/list.scss';

function List() {
  const tasks = [{
    id: '1',
    title: 'React',
    time: '02:00:00'
  },
  {
    id: '2',
    title: 'JavaScript',
    time: '01:00:00'
  }]

  return (
    <aside className="listTasks">
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="item">
            <h3>{task.title}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List