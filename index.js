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
    return start += parseInt(children[i].innerHTML);
  }

  children = secondList.children
  start = n

    for (let i = 0, l = children.length; i < l; i++) {
      return start += parseInt(children[i].innerHTML);
    }
}


function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
