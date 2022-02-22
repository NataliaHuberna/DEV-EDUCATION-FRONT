import {connect} from 'react-redux';
import {addTodos} from "../../store/todos/actions";
import TaskInput from "./TaskInput";

const mapDispatchToProps = dispatch => ({
    addTodos: (newTask) => dispatch(addTodos(newTask))
});

export default connect(null, mapDispatchToProps)(TaskInput);