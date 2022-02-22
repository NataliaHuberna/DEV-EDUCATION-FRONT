import {connect} from 'react-redux';
import Notification from "./Notification";
import {clearNotification} from "../../store/notify/actions";
import {selectNotify} from "../../store/notify/selectors";

const mapStateToProps = state => ({
    notify: selectNotify(state)
});

const mapDispatchToProps = dispatch => ({
    clearNotification: () => dispatch(clearNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);