import Items from './Items';
import style from '../../styles/list.module.scss';

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
    <aside className={style.listTasks}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map(task => (
          <Items
            key={task.id}
            {...task}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List