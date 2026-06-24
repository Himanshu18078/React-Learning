import { useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

function AddTodo({ handleNewItem }) {

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  /*
    useRef() ek React Hook hai jo ek ref object create karta hai.

    Example:
    {
      current: undefined
    }

    React render hone ke baad DOM element ka reference
    current property me store kar deta hai.
  */

  const handleAddButtonClicked = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;

    /*
      todoNameElement ek ref object hai.

      React ne input element ka reference
      todoNameElement.current me store kiya hua hai.

      Isliye hum current.value se input ki value
      directly access kar sakte hain.
    */

    const dueDate = dueDateElement.current.value;

    handleNewItem(todoName, dueDate);

    // input fields clear kar do
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form
        className="row kg-row"
        onSubmit={handleAddButtonClicked}
      >
        <div className="col-6">
          <input
            type="text"

            /*
              ref is input element ko
              todoNameElement ref object se connect karta hai.

              Component render hone ke baad React
              input DOM element ka reference
              todoNameElement.current me store kar deta hai.

              Ab hum todoNameElement.current ke through
              input element aur uski value ko
              directly access kar sakte hain.
            */
            ref={todoNameElement}

            placeholder="Enter Todo Here"
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
          />
        </div>

        <div className="col-2">
          <button className="btn btn-success kg-button">
            <IoAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
/*
 * ─────────────────────────────────────────────
 *  useRef() HOOK
 * ─────────────────────────────────────────────
 *
 *  useRef() gives you a persistent mutable box
 *  that holds a value across renders WITHOUT
 *  causing a re-render when it changes.
 *
 *  It returns a plain object with one property:
 *        { current: initialValue }
 *
 *  Two main uses:
 *   1. Store reference of a DOM element
 *   2. Store any mutable value (timer, counter)
 *      without triggering a re-render
 *
 * ─────────────────────────────────────────────
 *  HOW DOM REFERENCE FLOW WORKS
 * ─────────────────────────────────────────────
 *
 *  STEP 1 — Create the ref
 *           useRef(null)
 *                │
 *                ▼
 *           { current: null }
 *                │
 *  STEP 2 — Attach via ref prop
 *           <input ref={inputRef} />
 *                │
 *                ▼
 *           React sees the ref prop
 *                │
 *  STEP 3 — Component mounts (NOT just renders)
 *                │
 *                ▼
 *           { current: <input DOM node> }
 *                │
 *  STEP 4 — You access it
 *                │
 *                ▼
 *           inputRef.current.focus()
 *           → controls the real DOM element
 *
 * ─────────────────────────────────────────────
 *  ⚠️  NOTE: ref.current is set after MOUNTING
 *  not just rendering. Always access it inside
 *  useEffect() or event handlers — never during
 *  the render itself.
 * ─────────────────────────────────────────────
 */