import Player from "./../Actors/Player"
import Coin from "./../Actors/Coin"
import Lava from "./../Actors/Lava"

const levelChars = {
  '.': 'empty',
  '#': 'wall',
  '+': 'lava',
  '@': Player,
  o: Coin,
  '=': Lava,
  '|': Lava,
  v: Lava
}

export default levelChars