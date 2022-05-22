import "../styles/Response.css";

export default function Response(props) {
  const { payload } = props;

  return (
    <div>
      {payload.map((load) => (
        <div className="response_container">
          <li key={load.id}>
            <p className="response_user-prompt">
              <span>USER'S PROMPT: </span>
              {load.prompt}
            </p>
            <p className="response-ai">
              <span>GPT-3'S RESPONSE: </span>
              {load.response}
            </p>
          </li>
        </div>
      ))}
    </div>
  );
}
