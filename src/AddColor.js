import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  // const [color, setColor] = useState('deepskyblue');
  const [color, setColor] = useState('color');

  const styles = {
    backgroundColor: color,
  };

  // const colorList = ['deepskyblue', 'orange', 'crimson'];
  const initial_color = ['deepskyblue', 'blue', 'crimson'];
  const [colorList, setColorList] = useState(initial_color);

  return (
    <div>
      <input
        value={color}
        onChange={event => setColor(event.target.value)}
        style={styles}
      />
      <button
        onClick={() => {
          setColorList([...colorList, color]);
          // we r copying colorList---immutability...lets developer sleep
        }}
      >
        Add color
      </button>
      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
      {/* value of color is updated by react */}
    </div>
  );
}
