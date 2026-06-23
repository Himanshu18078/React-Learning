import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
function AddTodo({ handleNewItem }) {
  const[todoName , setTodoName] = useState("");
  const[dueDate , setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }
  const handleAddButtonClicked = (event) =>{
    handleNewItem(todoName , dueDate);
    setDueDate("");
    setTodoName("");
    event.preventDefault();
  }
  /*
 * event.preventDefault()
 *
 * Prevents the browser's default behavior for an event.
 *
 * In a form submission:
 * - Stops the page from reloading.
 * - Prevents the form data from being sent to the server automatically.
 * - Allows React/JavaScript to handle the form submission manually.
 *
 * Without preventDefault():
 * - Clicking a submit button refreshes the page.
 * - Component state may be reset.
 * - Your custom submit logic may not work as expected.
 *
 * Commonly used inside form submit handlers:
 */
  return (
    <div className="container text-center">
      <form className="row kg-row"
      onSubmit={handleAddButtonClicked}
           /*
          * The form's onSubmit handler runs when the user submits the form,
          * either by clicking the button or pressing Enter.
          * so whatever we were doing in the onlick now we are doing it in the onSubmit.
          */
          >
        <div className="col-6">
          <input 
          type="text" 
          placeholder="Enter Todo Here"
          onChange={handleNameChange}
          value={todoName}
          />
        </div>
        <div className="col-4">
          <input 
          type="date"
          onChange={handleDateChange}
          value={dueDate}
          />
        </div>
        <div className="col-2">
          <button 
          /*
          * Inside a form, a button's default type is "submit",
          * so clicking it triggers the form's onSubmit handler.
          */
          className="btn btn-success kg-button"
          // onClick={handleAddButtonClicked}
          >
           <IoAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
