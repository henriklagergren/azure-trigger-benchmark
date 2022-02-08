// A simple function returning the factorial of a set number n
const factorial = (n) => {
    let res = 1;
  
    for (let i = 2; i <= n; i += 1) {
      res *= i;
    }
    return res;
  };
  
  const workload = async (nrOfIterations : number) => {
    return {
      status: 200,
      headers: {
        'content-type': 'text/plain',
      },
      body: `${nrOfIterations}! = ${factorial(nrOfIterations)}`,
    };
  };

  export default workload;