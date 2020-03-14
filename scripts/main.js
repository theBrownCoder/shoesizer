// Size Group Wiring
const womens = document.getElementById('wgroup');
const mens = document.getElementById('mgroup');
const littlekids = document.getElementById('lkgroup');
const bigkids = document.getElementById('bkgroup');
const toddlers = document.getElementById('tgroup');
const infants = document.getElementById('igroup');
const chart = document.getElementById('chart');
const unitus = document.getElementById('unitus');
const unituk = document.getElementById('unituk');
const uniteu = document.getElementById('uniteu');
const unitin = document.getElementById('unitin');
const unitcm = document.getElementById('unitcm');

var customer = 'w'; // The page defaults to the first Customer option in the list
unitus.style.backgroundColor = '#2ba84a'; // The page defaults to US/Can size

// Size Groups
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
const littleKidSizes = [
  { usCan: 10.5, uk: 9.5, eu: 27, in: 6.6, cm: 16.8 },
  { usCan: 11, uk: 10, eu: 28, in: 6.8, cm: 17.1 },
  { usCan: 11.5, uk: 10.5, eu: 29, in: 7, cm: 17.8 },
  { usCan: 12, uk: 11, eu: 30, in: 7.1, cm: 18.1 },
  { usCan: 12.5, uk: 11.5, eu: 30, in: 7.3, cm: 18.4 },
  { usCan: 13, uk: 12, eu: 31, in: 7.5, cm: 19.1 },
  { usCan: 13.5, uk: 12.5, eu: 31, in: 7.6, cm: 19.4 },
  { usCan: 1, uk: 13, eu: 32, in: 7.8, cm: 19.7 },
  { usCan: 1.5, uk: 14, eu: 33, in: 8, cm: 20.3 },
  { usCan: 2, uk: 1, eu: 33, in: 8.1, cm: 20.6 },
  { usCan: 2.5, uk: 1.5, eu: 34, in: 8.3, cm: 21 },
  { usCan: 3, uk: 2, eu: 34, in: 8.5, cm: 21.6 },
];
const bigKidSizes = [
  { usCan: 3.5, uk: 2.5, eu: 35, in: 8.6, cm: 21.9 },
  { usCan: 4, uk: 3, eu: 36, in: 8.8, cm: 22.2 },
  { usCan: 4.5, uk: 3.5, eu: 36, in: 9, cm: 22.9 },
  { usCan: 5, uk: 4, eu: 37, in: 9.1, cm: 23.2 },
  { usCan: 5.5, uk: 4.5, eu: 37, in: 9.3, cm: 23.5 },
  { usCan: 6, uk: 5, eu: 38, in: 9.5, cm: 24.1 },
  { usCan: 6.5, uk: 5.5, eu: 38, in: 9.6, cm: 24.4 },
  { usCan: 7, uk: 6, eu: 39, in: 9.8, cm: 24.8 },
];
const toddlerSizes = [
  { usCan: 3.5, uk: 19, eu: 2.5, in: 4.3, cm: 10.8 },
  { usCan: 4, uk: 19, eu: 3, in: 4.5, cm: 11.4 },
  { usCan: 4.5, uk: 20, eu: 3.5, in: 4.6, cm: 11.7 },
  { usCan: 5, uk: 20, eu: 4, in: 4.8, cm: 12.1 },
  { usCan: 5.5, uk: 21, eu: 4.5, in: 5, cm: 12.7 },
  { usCan: 6, uk: 22, eu: 5, in: 5.1, cm: 13 },
  { usCan: 6.5, uk: 22, eu: 5.5, in: 5.3, cm: 13.3 },
  { usCan: 7, uk: 23, eu: 6, in: 5.5, cm: 14 },
  { usCan: 7.5, uk: 23, eu: 6.5, in: 5.6, cm: 14.3 },
  { usCan: 8, uk: 24, eu: 7, in: 5.8, cm: 14.6 },
  { usCan: 8.5, uk: 25, eu: 7.5, in: 6, cm: 15.2 },
  { usCan: 9, uk: 25, eu: 8, in: 6.1, cm: 15.6 },
  { usCan: 9.5, uk: 26, eu: 8.5, in: 6.3, cm: 15.9 },
  { usCan: 10, uk: 27, eu: 9, in: 6.5, cm: 16.5 },
];
const infantSizes = [
  { usCan: 0, uk: 0, eu: 15, in: 3.1, cm: 7.9 },
  { usCan: 1, uk: 0.5, eu: 16, in: 3.5, cm: 8.9 },
  { usCan: 1.5, uk: 1, eu: 17, in: 3.6, cm: 9.2 },
  { usCan: 2, uk: 1, eu: 17, in: 3.8, cm: 9.5 },
  { usCan: 2.5, uk: 1.5, eu: 18, in: 4, cm: 10.2 },
  { usCan: 3, uk: 2, eu: 18, in: 4.1, cm: 10.5 },
];

// Size Group Click Listeners
womens.addEventListener('click', e => {
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }
  customer = 'w';
  womenSizes.forEach(size => {
    var div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.border = '2px tomato solid';
    div.textContent = `${size.usCan}`;
    div.style.fontSize = 'x-large';
    div.style.textAlign = 'right';
    div.style.margin = '1.5ch';
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    chart.append(div);
  });
});
mens.addEventListener('click', e => {
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }
  customer = 'm';
  menSizes.forEach(size => {
    var div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.border = '2px tomato solid';
    div.textContent = `${size.usCan}`;
    div.style.fontSize = 'x-large';
    div.style.textAlign = 'center';
    div.style.margin = '1.5ch';
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    chart.append(div);
  });
});
littlekids.addEventListener('click', e => {
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }
  customer = 'l';
  littleKidSizes.forEach(size => {
    var div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.border = '2px tomato solid';
    div.textContent = `${size.usCan}`;
    div.style.fontSize = 'x-large';
    div.style.textAlign = 'center';
    div.style.margin = '1.5ch';
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    chart.append(div);
  });
});
bigkids.addEventListener('click', e => {
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }
  customer = 'b';
  bigKidSizes.forEach(size => {
    var div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.border = '2px tomato solid';
    div.textContent = `${size.usCan}`;
    div.style.fontSize = 'x-large';
    div.style.textAlign = 'center';
    div.style.margin = '1.5ch';
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    chart.append(div);
  });
});
toddlers.addEventListener('click', e => {
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }
  customer = 't';
  toddlerSizes.forEach(size => {
    var div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.border = '2px tomato solid';
    div.textContent = `${size.usCan}`;
    div.style.fontSize = 'x-large';
    div.style.textAlign = 'center';
    div.style.margin = '1.5ch';
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    chart.append(div);
  });
});
infants.addEventListener('click', e => {
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }
  customer = 'i';
  infantSizes.forEach(size => {
    var div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.border = '2px tomato solid';
    div.textContent = `${size.usCan}`;
    div.style.fontSize = 'x-large';
    div.style.textAlign = 'center';
    div.style.margin = '1.5ch';
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    chart.append(div);
  });
});

// Conversion Button Click Listeners
unitus.addEventListener('click', e => {
  console.log(customer);
  let u = unitus.innerHTML;
  console.log(u);
  switch (customer) {
    case 'w':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      womenSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.usCan}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'm':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      menSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.usCan}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'l':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      littleKidSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.usCan}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'b':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      bigKidSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.usCan}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 't':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      toddlerSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.usCan}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'i':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      infantSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.usCan}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;

    default:
      console.log('Error...');
  }
});
unituk.addEventListener('click', e => {
  console.log(customer);
  let u = unituk.innerHTML;
  console.log(u);
  switch (customer) {
    case 'w':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      womenSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.uk}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'm':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      menSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.uk}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'l':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      littleKidSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.uk}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'b':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      bigKidSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.uk}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 't':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      toddlerSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.uk}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'i':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      infantSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.uk}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;

    default:
      console.log('Error...');
  }
});
uniteu.addEventListener('click', e => {
  console.log(customer);
  let u = unitus.innerHTML;
  console.log(u);
  switch (customer) {
    case 'w':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      womenSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.eu}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'm':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      menSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.eu}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'l':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      littleKidSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.eu}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'b':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      bigKidSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.eu}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 't':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      toddlerSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.eu}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'i':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      infantSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.eu}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;

    default:
      console.log('Error...');
  }
});
unitin.addEventListener('click', e => {
  console.log(customer);
  let u = unitus.innerHTML;
  console.log(u);
  switch (customer) {
    case 'w':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      womenSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.in}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'm':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      menSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.in}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'l':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      littleKidSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.in}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'b':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      bigKidSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.in}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 't':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      toddlerSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.in}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'i':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      infantSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.in}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;

    default:
      console.log('Error...');
  }
});
unitcm.addEventListener('click', e => {
  console.log(customer);
  let u = unitus.innerHTML;
  console.log(u);
  switch (customer) {
    case 'w':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      womenSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.cm}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'm':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      menSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.cm}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'l':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      littleKidSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.cm}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'b':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      bigKidSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.cm}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 't':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      toddlerSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.cm}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;
    case 'i':
      while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
      }
      infantSizes.forEach(size => {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.border = '2px tomato solid';
        div.textContent = `${size.cm}`;
        div.style.fontSize = 'x-large';
        div.style.textAlign = 'right';
        div.style.margin = '1.5ch';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        chart.append(div);
      });
      break;

    default:
      console.log('Error...');
  }
});
