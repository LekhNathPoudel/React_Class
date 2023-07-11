import React, { useState } from "react";

const IncrementDecrement = () => {
  const [num, setNum] = useState(1);
  const [data, setData] = useState(5);
  const [lekh, setLekh]=useState(10);

  //const increase = () => setNum(num+1)

  return (
    <>
      <div>
        <h1 className="text-success">{num}</h1>
        {/* <button className="btn btn-primary" onClick={increase}>
        Increment
      </button> */}
        {num < 20 && (
          <button className="btn btn-primary" onClick={() => setNum(num + 1)}>
            Increment{" "}
          </button>
        )}

        {num > 1 && (
          <button className="btn btn-danger" onClick={() => setNum(num - 1)}>
            Decrement
          </button>
        )}
      </div>
      


      <div>
        <h1 className="text-success">{data}</h1>
       
        {data < 50 && (
          <button className="btn btn-primary" onClick={() => setData(data + 5)}>
            Increment{" "}
          </button>
        )}

        {data > 5 && (
          <button className="btn btn-danger" onClick={() => setData(data - 5)}>
            Decrement
          </button>
        )}
      </div>

    


    </>
  );
};

export default IncrementDecrement;
