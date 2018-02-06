export const formatNum = num => {
  const splitNum = num.split('.');
  const firstHalf = splitNum[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const secondHalf = splitNum[1];

  return secondHalf ? `${firstHalf}.${secondHalf}` : firstHalf;
}

const ORANGE = 'ORANGE';
const BLUE = 'BLUE';
const GREEN = 'GREEN';
const GRAY = 'GRAY';

export const getCoinColor = symbol => {
  switch(symbol){
    case 'BTC':
      return ORANGE;
    case 'ETH':
      return BLUE;
    case 'XRP':
      return BLUE;
    case 'BCH':
      return GREEN;
    case 'ADA':
      return BLUE;
    case 'XLM':
      return BLUE;
    case 'LTC':
      return GRAY;
    case 'NEO':
      return GREEN;
    case 'EOS':
      return GRAY;
    case 'XEM':
      return BLUE;
    default:
      return GRAY;
  }
}

export const getColorClass = color => {
  switch(color){
    case ORANGE:
      return 'orange';
    case BLUE:
      return 'blue';
    case GREEN:
      return 'green';
    case GRAY:
      return 'gray';
    default:
      return 'gray';
  }
}
