/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    return dfs(root,0)//一开始把它父节点的的和（preSum）置0
};
const dfs=(root,preSum)=>{
    if(root===null) return 0
    const sum=preSum*10+root.val
    if(root.left===null&&root.right===null){
        return sum
    }else{
        return dfs(root.left,sum)+dfs(root.right,sum)
    }
}
// @lc code=end

