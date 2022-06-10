import { useState } from 'react';

//counter------//
// import { useState } from 'react'; should be at top
//hook- it is a function, that make react listen to change. This function uses prefix use e.g useState
//const [state,setState]=useState(InitialValue)
//state-current value or current scenario-state of the art tech
//setState-It is a function-It update state-It informs react that state is changed

export function Counter() {
  const [Like, setLike] = useState(0);
  const [disLike, setdisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(Like + 1)}>👍{Like}</button>
      <button onClick={() => setdisLike(disLike + 1)}>👎{disLike}</button>
    </div>
  );
}
