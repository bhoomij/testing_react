import { combineReducers } from 'redux';
import commentsReduce from './comments';

const rootReducer = combineReducers({
  comments: commentsReduce
});

export default rootReducer;
