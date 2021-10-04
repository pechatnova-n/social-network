import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageAC} from "../../redux/dialogs-reducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


    let mapStateToProps = (state) =>{
        return {
            dialogs: state.dialogsPage.dialogs,
            messages: state.dialogsPage.messages,
            newMessageBody: state.newMessageBody,
        }
    }

    let mapDispatchToProps = (dispatch) => {
        return {
            sendMessage: (newMessageBody) => {
                dispatch(sendMessageAC(newMessageBody))
            }
        }
    }



    export default compose(
        connect(mapStateToProps, mapDispatchToProps),
        WithAuthRedirect
    )(Dialogs);



