import Player from './../Actors/Player'
import Coin from './../Actors/Coin'
import Lava from './../Actors/Lava'
import Monster from './../Actors/Monster'

const levelChars = {
  '.': 'empty',
  '#': 'wall',
  '+': 'lava',
  '@': Player,
  'o': Coin,
  '=': Lava,
  '|': Lava,
  'v': Lava,
  'M': Monster
}

export default levelChars
