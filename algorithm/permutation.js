const vis = {};

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function dfs(nums, res, cur) {
  if (cur === nums.length) {
    console.log(res);
    return;
  }

  for (let i = cur; i < nums.length; i++) {
    res.push(nums[i]);
    swap(nums, i, cur);
    dfs(nums, res, cur + 1);
    swap(nums, i, cur);
    res.pop();
  }
}


function permute(nums) {
  dfs(nums, [], 0);
}

permute([1, 2, 3, 4]);

/**
 * 1 2 3 4
 * 1 2 4 3
 * 1 3 2 4
 * 1 3 4 2
 * 1 4 3 2
 * 1 4 2 3
 * 2 1 3 4
 * 2 1 4 3
 * 
**/