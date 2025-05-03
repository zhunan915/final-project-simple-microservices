import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(`http://qa.zhunandomain.live/post/${postId}/comments`);
    setComments(res.data || []);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => {
    let content;
    switch (comment.status) {
      case "pending":
        content = "This comment is awaiting moderation!";
        break;
      case "rejected":
        content = "This comment has been rejected!";
        break;
      default:
        content = comment.content;
        break;
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
