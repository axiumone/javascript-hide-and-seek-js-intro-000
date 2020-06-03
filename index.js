function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('#nested .target');

}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children
  let start = n

  for (let i = 0, l = children.length; i < l; i++) {
    return start + i + n;
  }

  let children = secondList.children

    for (let i = 0, l = children.length; i < l; i++) {
      return start + i + n;
    }
}


function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
