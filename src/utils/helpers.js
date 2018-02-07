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

export const determineSign = num => {
  return parseFloat(num) >= 0 ? 'pos' : 'neg';
}

export const timeConverter = timestamp => {
  const d = new Date(timestamp * 1000);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  const date = d.getDate();
  const hour = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();

  return `${date}/${month}/${year} ${hour}:${min}:${sec}`;
}
