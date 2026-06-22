import styles from './TodoItems.module.css'
import TodoItem from "./TodoItem.JSX";
const TodoItems = ({ todoItems , onDeleteClick}) => {
  return <div className={`${styles.itemsContainer}`}>
    {todoItems.map(item => <  TodoItem key = {Math.random()} todoName={`${item.name}`} todoDate={`${item.dueDate}`} clickDelete = {onDeleteClick}></TodoItem> )}
  </div>
}
export default TodoItems;