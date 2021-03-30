function addTwoNum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                console.log(i, j)
                return
            }
            console.count()
        }
    }
}

function addTwoNum2(nums, target) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            console.log(map.get(target - nums[i]), i)
        } else {
            map.set(nums[i], i)
        }
    }
}

let arr = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
addTwoNum(arr, 101)
console.log(arr.length)

console.log('****************************')

addTwoNum2(arr, 101)
