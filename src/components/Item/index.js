import {connect} from 'react-redux';
import Item from "./Item";
import {checkTodo, deleteTodo} from "../../store/todos/actions";
import {showNotification} from "../../store/notify/actions";

const mapDispatchToProps = dispatch => ({
    checkTodo: id => dispatch(checkTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    showNotification: notify => dispatch(showNotification({message: 'Todo was deleted'}))
});

export default connect(null, mapDispatchToProps)(Item);