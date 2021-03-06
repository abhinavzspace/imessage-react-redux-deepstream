
import { routeReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import conversations from './conversations'
import users from './users'
import recipientsList from './recipientsList'
import draft from './draft'
import profile from './profile'
import selectedConversation from './selectedConversation'
import newConversation from './newConversation'

export default combineReducers({
  routing,
  conversations,
  users,
  recipientsList,
  draft,
  profile,
  selectedConversation,
  newConversation
})
