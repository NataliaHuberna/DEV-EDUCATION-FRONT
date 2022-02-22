import {connect} from 'react-redux';
import List from "./List";
import {selectTodos} from "../../store/todos/selectors";

const mapStateToProps = state => ({
    todos: selectTodos(state)
});

export default connect(mapStateToProps)(List);