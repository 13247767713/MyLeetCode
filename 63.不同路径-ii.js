/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from(new Array(m), () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] !== 1) {
      dp[i][0] = 1;
    } else {
      break;
    }
  }
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] !== 1) {
      dp[0][j] = 1;
    } else {
      break;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
        if (obstacleGrid[i][j]===1) continue;
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m-1][n-1]
};

var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = Array(m).fill().map(item => Array(n).fill(0))

    for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
        dp[i][0] = 1
    }

    for (let i = 0; i < n && obstacleGrid[0][i] === 0; ++i) {
        dp[0][i] = 1
    }

    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
};
// @lc code=end
