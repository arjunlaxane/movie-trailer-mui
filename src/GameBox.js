export function GameBox({ val, onPlayerClick }) {
  // const val = 'X';
  // const [val, setVal] = useState('');
  // const styles = {
  // color: val === 'X' ? 'green' : 'red',
  // };
  return (
    // <div style={styles} onClick={onPlayerClick} className="game-box">
    <div onClick={onPlayerClick} className="game-box">
      {val}
    </div>
  );
}
