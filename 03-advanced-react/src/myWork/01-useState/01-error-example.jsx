const count = (e) => {
  return e + 1;
};

const displayCountValue = (value = 0) => {
  document.querySelector("h1").innerText = str(count(value));
};
const ErrorExample = () => {
  let count = 0;
  return (
    <>
      <h2>UseState Error Example</h2>
      <h1>{count}</h1>
      <button onClick={displayCountValue}>count</button>
    </>
  );
};

export default ErrorExample;
