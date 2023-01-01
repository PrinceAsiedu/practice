const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let item of arr) {
    let listItem = `<li class="text-warning">${item}</li>`;
    failureItems.push(listItem);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);