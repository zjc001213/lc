/**5. 最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"
 

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成   */

function longestPalindrome(s) {
    const dp = []
    let res = ''
    let len = s.length

    for (let i = len - 1; i >= 0; i--) {
        dp[i] = []
        for (let j = i; j < len - 1; j++) {
            if (i == j) {
                dp[i][j] = true
            } else if (j - i > 2 && str[i] == str[j]) {
                dp[i][j] = true
            } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true
            }

            if (dp[i][j] &&  j - i + 1 > res.length) {
                res = s.substring(i, j + 1)
            }
        }
    }

    return res

}

let str = 'babad'

console.log(longestPalindrome(str))