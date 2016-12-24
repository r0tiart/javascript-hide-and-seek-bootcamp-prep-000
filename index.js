function getFirstSelector(selector){
  const item = document.querySelector(selector);
  return item;
}

function nestedTarget(){
 const nestedItem  =  document.querySelector('#nested div.target');
 return nestedItem;
}

function deepestChild(){
  const deepChild = document.querySelector('div#grand-node');
  return deepChild;
}

function increaseRankBy(n){
  const rank = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (var i = 0, l = rank.length; i<l ; i++){
    rank[i].innerHTML = (i + n).toString();
  }
}