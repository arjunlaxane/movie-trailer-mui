export function ColorBox({ color }) {
  // console.log(color);
  const styles = {
    backgroundColor: color,
    height: '25px',
    width: '200px',
    marginTop: '10px',
  };

  return <div style={styles}></div>;
}
