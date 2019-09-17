import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import Messages from './Messages';
import { updateNewMessageBody, sendMessage } from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class MessagesContainer extends React.Component {
  render() {
    return <Messages newMessageBody={this.props.newMessageBody} dialogs={this.props.dialogs} messages={this.props.messages} sendMessage={this.props.sendMessage} updateNewMessageBody={this.props.updateNewMessageBody} />
  }
}

const mapStateToProps = (state) => {
  return {
    newMessageBody: state.messagesData.newMessageBody,
    dialogs: state.messagesData.dialogData.map( (d) => <Dialog key={d.id} id={d.id} name ={d.name} img_src={d.img_src} />),      
    messages: state.messagesData.messageData.map( (m) => <Message key={m.id} img_src={m.img_src} message={m.message} />),
    isAuth: state.authData.isAuth
  }
}

// export default withAuthRedirect(connect(mapStateToProps, {sendMessage, updateNewMessageBody})(MessagesContainer));
export default compose(connect(mapStateToProps, {sendMessage, updateNewMessageBody}), withAuthRedirect)(MessagesContainer);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: () => {
//       dispatch(sendMessageCreator());
//     },
//     changeMessage: (changedMsgBody) => {
//       dispatch(updateNewMessageBodyCreator(changedMsgBody));
//     }
//   }
// }

// const MessagesContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {
//         store => {
//           const {dialogData, messageData, newMessageBody} = store.getState().messagesData,
//           dispatch = store.dispatch;
   
//           const dialogs = dialogData.map( (d, index) => <Dialog key={index} id={d.id} name ={d.name} img_src={d.img_src} />)
          
//           const messages = messageData.map( (m, index) => <Message key={index} img_src={m.img_src} message={m.message} />)

//           const sendMessage = () => {
//             dispatch(sendMessageCreator());
//           }

//           const changeMessage = (changedMsgBody) => {
//             dispatch(updateNewMessageBodyCreator(changedMsgBody));
//           }
//           return <Messages newMessageBody={newMessageBody} dialogs={dialogs} messages={messages} sendMessage={sendMessage} changeMessage={changeMessage}/>
//         }
//       }
//       </StoreContext.Consumer>
//   )
// }