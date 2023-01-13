import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const [filterStatus,setFilterStatus]=useState(false)

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
    console.log("user entered: " + value);
  };
  const updateFilter=()=>{ console.log("hi")} 

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
	  
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
	  <div className="d-flex justify-content-between">
	

      <button type="submit" className="btn btn-primary ">
        Submit
      </button>

	 
	</div>
    </form>
	
  );
};

export default AddTodoForm;
