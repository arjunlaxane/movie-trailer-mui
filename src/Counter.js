import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
//counter------//
// import { useState } from 'react'; should be at top
//hook- it is a function, that make react listen to change. This function uses prefix use e.g useState
//const [state,setState]=useState(InitialValue)
//state-current value or current scenario-state of the art tech
//setState-It is a function-It update state-It informs react that state is changed

export function Counter() {
  const [Like, setLike] = useState(0);
  const [disLike, setdisLike] = useState(0);
  const increamentDisLike = () => setdisLike(disLike + 1);
  const increamentLike = () => setLike(Like + 1);

  return (
    <div>
      <IconButton color="primary" aria-label="like">
        <Badge onClick={increamentLike} badgeContent={Like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton color="error" aria-label="Dislike">
        <Badge onClick={increamentDisLike} badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
      {/* <button onClick={increamentLike}>{Like}</button> */}
      {/* <button onClick={increamentDisLike}>👎{disLike}</button> */}
    </div>
  );
}
