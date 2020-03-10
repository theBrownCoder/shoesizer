const womens = document.getElementById('wgroup');

const mens = document.getElementById('mgroup');

const littlekids = document.getElementById('lkgroup');
littlekids.addEventListener('select', e => {});
const bigkids = document.getElementById('bkgroup');
bigkids.addEventListener('select', e => {});
const toddlers = document.getElementById('tgroup');
toddlers.addEventListener('select', e => {});
const infants = document.getElementById('size_group');
infants.addEventListener('select', e => {});
const chart = document.getElementById('chart');
const womenSizes = [
  { usCan: 4, uk: 2, eu: 35, in: 8.2, cm: 20.8 },
  { usCan: 4.5, uk: 2.5, eu: 35, in: 8.3, cm: 21.3 },
  { usCan: 5, uk: 3, eu: '35-36', in: 8.5, cm: 21.6 },
  { usCan: 5.5, uk: 3.5, eu: 36, in: 8.8, cm: 22.2 },
  { usCan: 6, uk: 4, eu: '36-37', in: 8.9, cm: 22.5 },
  { usCan: 6.5, uk: 4.5, eu: 37, in: 9.1, cm: 23 },
  { usCan: 7, uk: 5, eu: '37-38', in: 9.3, cm: 23.5 },
  { usCan: 7.5, uk: 5.5, eu: 38, in: 9.4, cm: 23.8 },
  { usCan: 8, uk: 6, eu: '38-39', in: 9.5, cm: 24.1 },
  { usCan: 8.5, uk: 6.5, eu: 39, in: 9.7, cm: 24.6 },
  { usCan: 9, uk: 7, eu: '39-40', in: 9.9, cm: 25.1 },
  { usCan: 9.5, uk: 7.5, eu: 40, in: 10, cm: 25.4 },
  { usCan: 10, uk: 8, eu: '40-41', in: 10.2, cm: 25.9 },
  { usCan: 10.5, uk: 8.5, eu: 41, in: 10.3, cm: 26.2 },
  { usCan: 11, uk: 9, eu: '41-42', in: 10.5, cm: 26.7 },
  { usCan: 11.5, uk: 9.5, eu: 42, in: 10.7, cm: 27.1 },
  { usCan: 12, uk: 10, eu: '42-43', in: 10.9, cm: 27.6 },
];
const menSizes = [
  { usCan: 6, uk: 5.5, eu: 39, in: 9.3, cm: 23.5 },
  { usCan: 6.5, uk: 6, eu: 39, in: 9.5, cm: 24.1 },
  { usCan: 7, uk: 6.5, eu: 40, in: 9.6, cm: 24.4 },
  { usCan: 7.5, uk: 7, eu: '40-41', in: 9.8, cm: 24.8 },
  { usCan: 8, uk: 7.5, eu: 41, in: 9.9, cm: 25.4 },
  { usCan: 8.5, uk: 8, eu: '41-42', in: 10.1, cm: 25.7 },
  { usCan: 9, uk: 8.5, eu: 42, in: 10.3, cm: 26 },
  { usCan: 9.5, uk: 9, eu: '42-43', in: 10.4, cm: 26.7 },
  { usCan: 10, uk: 9.5, eu: 43, in: 10.6, cm: 27 },
  { usCan: 10.5, uk: 10, eu: '43-44', in: 10.8, cm: 27.3 },
  { usCan: 11, uk: 10.5, eu: 44, in: 10.9, cm: 27.9 },
  { usCan: 11.5, uk: 11, eu: '44-45', in: 11.1, cm: 28.3 },
  { usCan: 12, uk: 11.5, eu: 45, in: 11.3, cm: 28.6 },
  { usCan: 13, uk: 6, eu: 39, in: 9.5, cm: 24.1 },
  { usCan: 14, uk: 13.5, eu: 47, in: 11.9, cm: 30.2 },
  { usCan: 15, uk: 14.5, eu: 48, in: 12.2, cm: 31 },
  { usCan: 16, uk: 15.5, eu: 49, in: 12.5, cm: 31.8 },
];

womens.addEventListener('click', e => {
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }
  womenSizes.forEach(size => {
    var div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.border = '2px tomato solid';
    div.textContent = `${size.usCan}`;
    div.style.textAlign = 'center';
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    chart.append(div);
  });
});
mens.addEventListener('click', e => {
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }
  menSizes.forEach(size => {
    var div = document.createElement('div');
    div.style.width = '150px';
    div.style.height = '150px';
    div.style.border = '2px tomato solid';
    div.style.margin = '1.5px';
    div.textContent = `${size.usCan}`;
    div.style.textAlign = 'center';
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    chart.append(div);
  });
});
