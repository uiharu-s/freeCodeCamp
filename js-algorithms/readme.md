# JavaScript Algorithms and Data Structures Projects

## Palindrome Checker

```js
function palindrome(str) {
  var rx = /\W|_/gi;
  str = str.replace(rx, "");
  
  var array = [];
  array = str.split("");
  
  var reverseArray = array.slice();
  reverseArray.reverse();
  
  console.log("rA: " + reverseArray + " ; A: " + array);
  for (i = array.length - 1; i > 0; --i) {
    if (array[i].toLowerCase() !== reverseArray[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
```

## Roman Numeral Converter

```javascript
function convertToRoman(num) {
  if(num > 3999 | Math.floor(num) !== num) {return;}
  num = num.toString().split("");
  
  var roman = ["I", "V", "X", "L", "C", "D", "M"],
      romanNum = [],
      j = 0;
  
  for (i = num.length; i--; j += 2) {
    var r = num[i] % 5,
        d = Math.ceil(num[i] / 5 - 0.6),
        ab = 0;
  
    if (!r) {
    }  else if(r < 4) {
      romanNum.unshift(roman[j].repeat(r));
    } else {
      romanNum.unshift(roman[j]);
      ab = 1;
    }
    
    if (d) {
      romanNum.splice(ab, 0, roman[j + d]);
    }
  }

  return romanNum.join("");
}
```

## Caesars Cipher

```javascript
function rot13(str) { // LBH QVQ VG!
  function rot (i_) {
    var i = i_.charCodeAt(0);
    if (64 < i && i < 78) {
      return String.fromCharCode(i + 13);
    }
    if (77 < i && i < 91) {
      return String.fromCharCode(i - 13);
    }
  }
  str = str.replace(/[A-Z]/g, rot);
  return str;
}
```

## Telephone Number Validator

```javascript
function telephoneCheck(str) {
  // Good luck!
//   var arr = str.match(/^1?( ?-?\(\d{3}\) ?-?| ?\-?\d{3} ?\-?)\d{3}( ?|-?)\d{4}$/);
//   if(arr) {return true;} else {return false;}
  
  return /^1?( ?-?\(\d{3}\) ?-?| ?\-?\d{3} ?\-?)\d{3}( ?|-?)\d{4}$/.test(str);
}
```

## Cash Register

```javascript
function checkCashRegister(price, cash, cid) {
  // Here is your change, ma'am.
  price *= 100; cash *= 100;
  cid = cid.map((i) => {return [i[0], i[1] * 100]});
  var change = (cash - price),
      drawerTotal = 0;
  cid.forEach(i => drawerTotal += i[1]);
  if (drawerTotal === change) {
    return "Closed";
  }
  if (drawerTotal > change) {
    var arr = [];
    for (var i = 8; i > -1; --i) {
      var base = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
      if (change >= base[i] && cid[i][1]) {
        var j = Math.trunc((change) / (base[i]));
        if (j * base[i] <= cid[i][1]) {
          change -= j * base[i];
          arr.push([cid[i][0], base[i] * j]);
        } else {
          change -= cid[i][1];
          arr.push([cid[i][0], cid[i][1]]);
        }
      }
    }
    var candidateChange = 0;
    arr.forEach(i => candidateChange += i[1]);
    if (candidateChange === (cash - price)) {
      arr = arr.map((i) => {return [i[0], i[1] / 100]});
      return arr;
    }
    else {return "Insufficient Funds";}
  }
  return "Insufficient Funds";
}
```
