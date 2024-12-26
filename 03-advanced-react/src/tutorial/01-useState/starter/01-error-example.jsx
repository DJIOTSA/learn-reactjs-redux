const count = (e)=>{
  return e+1
}

const displayCountValue = (value=0) =>{
  document.querySelector('h1').innerText = str(count(value))
}
const ErrorExample = () => {
  let count = 0;
  return (
    <>
      <h2></h2>
      <button onClick={displayCountValue}></button>
    </>
  );
};

export default ErrorExample;
