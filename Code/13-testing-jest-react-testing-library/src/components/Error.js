import { useRouteError } from 'react-router';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return <div>This is the Error Page. {error.status}</div>;
};

export default Error;
