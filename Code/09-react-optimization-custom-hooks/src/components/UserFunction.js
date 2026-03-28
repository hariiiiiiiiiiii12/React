const UserFunction = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h2>Role: Cooks</h2>
      <h2>Location: Barcelona</h2>
    </div>
  );
};

export default UserFunction;
