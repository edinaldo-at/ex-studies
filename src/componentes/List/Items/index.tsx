import style from '../../../styles/list.module.scss';

interface Props {
  title: string;
  time: string;
}

const Items: React.FC<Props> = ({ title, time }) => {
  return (
    <li className={style.item}>
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  )
}

export default Items