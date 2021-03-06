
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import style from './style.css'
import App from '../../containers/App'
import * as DraftActions from '../../actions/draft'

function getTitleFromRecipients(recipients) {
    return title
}

class MessageInput extends Component {
  onKeyPress(e) {
    if (e.which != 13 || e.shiftKey) {
      return
    }
    e.preventDefault()
    const { dispatch, draft } = this.props

    // If no recipients, no-op
    if (draft.recipients.length == 0) {
        console.log('Message has no recipients!')
        return
    }

    var messageBody = this.textarea.value
    if (messageBody) {
        dispatch(DraftActions.sendDraft(messageBody))
    }
    this.textarea.value = ''
  }

  onSendClick(e) {
    e.preventDefault()
    const { dispatch, draft } = this.props

    // If no recipients, no-op
    if (draft.recipients.length == 0) {
        console.log('Message has no recipients!')
        return
    }

    var messageBody = this.textarea.value
    if (messageBody) {
        dispatch(DraftActions.sendDraft(messageBody))
    }
    this.textarea.value = ''
  }

  render() {
    return (
      <div className={style.messageInput}>
        <textarea ref={(c) => this.textarea = c} placeholder="Enter a message..." rows="1" onKeyPress={this.onKeyPress.bind(this)} ></textarea>
        <a href="#" className={style.button} onClick={this.onSendClick.bind(this)}>Send</a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  var draftState = state.draft
  return {
    draft: draftState
  }
}

export default connect(
  mapStateToProps
)(MessageInput)
