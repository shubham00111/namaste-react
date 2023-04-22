import { useRouteError } from "react-router-dom";

const Error = () => {
  const {
    data,
    status,
    error: { message },
    statusText,
  } = useRouteError();
  console.log(useRouteError());
  return (
    <div>
      <h1>Oops!!! Something went Wrong</h1>
      <h1>
        {status} {statusText}
      </h1>
      <h2>{message}</h2>
    </div>
  );
};

export default Error;
