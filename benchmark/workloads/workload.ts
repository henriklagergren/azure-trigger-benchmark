// A simple function returning the factorial of a set number n
const factorial = (n : number) => {
    let res = 1;
  
    for (let i = 2; i <= n; i += 1) {
      res *= i;
    }
    return res;
  };
  
  const workload = async () => {
    const nrOfIterations = 20;
    return {
      status: 200,
      headers: {
        'content-type': 'text/plain',
      },
      body: `${nrOfIterations}! = ${factorial(nrOfIterations)}`,
    };
  };

  export default workload;