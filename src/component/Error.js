import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
      <h4>Oops! Error Occured !</h4>
      <h6>Error Details : {error.status} </h6>
    </div>
  );
};

export default Error;
