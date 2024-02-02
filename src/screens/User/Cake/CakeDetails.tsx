import { useParams } from "react-router-dom";

const DUMMY_COMMENTS = [
  {
    user: "john doe",
    timestamp: "2021-01-01",
    comment: "This is a comment",
  },
];

export const Component = function CakeDetails(): JSX.Element {
  const { id } = useParams();

  return (
    <div className="flex w-full">
      <div className="w-full">
        <div>
          <img src="https://via.placeholder.com/500" alt="" />
        </div>
        <div>
          <h5>Comments</h5>
          {DUMMY_COMMENTS.map((comment) => (
            <div>
              <p className="text-slate-600">
                <span>{comment.user}</span> - <span>{comment.timestamp}</span>
              </p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">details: {id}</div>
    </div>
  );
};
