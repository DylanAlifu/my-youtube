import React from "react";

const comments = [
  {
    name: "John Doe",
    comment: "This is a great video!",
    replies: [
      {
        name: "Jane Doe",
        comment: "I agree!",
        replies: [
          {
            name: "John Doe",
            comment: "I agree with your agreement!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Jane Doe",
    comment: "I like this video a lot!",
    replies: [
      {
        name: "John Doe",
        comment: "Thanks for the like!",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex p-3 gap-4">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
        className="w-12 h-12"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div className="bg-gray-100" key={index}>
      <Comment  data={comment} />
      <div className="pl-3 border border-y-0 border-l-black ml-8 my-2">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
