import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import CommentList from './CommentList';

function MessageWrapper(props){
  console.log(props.postContent.comments);

  return(
    <div>
      <Message 
        content = {props.postContent.msgContent}
        upCount= {props.postContent.upCount}
        downCount= {props.postContent.downCount}
        onVote={props.onVote}
      />
      <button>Show Comments</button>
      <div className="comments">
        <CommentList
          commentList = {props.postContent.comments}
          forumId = {props.forumId}
          postId = {props.postContent.id}
          onNewCommentCreation = {props.onNewPostCreation}
          onVote = {props.onVote}
        />
      </div>
    </div>
  );
}

MessageWrapper.propTypes = {
  postContent: PropTypes.object,
  onNewPostCreation: PropTypes.func,
  forumId: PropTypes.string,
  onVote: PropTypes.func
};

export default MessageWrapper;