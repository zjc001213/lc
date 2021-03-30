//链表题
/**
 * l1  3 -> 6 -> 5
 * l2  9 -> 3 -> 4
 * 
 * 输出一个链表 2 -> 0 -> 0 -> 1
 * 解释： 563 + 439 = 1002
 */


class Node {
    constructor(data) {
        this.prev = null
        this.next = null
        this.data = data
    }
}


class SingleList {
    constructor(data) {
        this.size = 0
        this.head = new Node(data)
        this.currNode = ''
    }

    find(item) {// 在单链表中寻找item元素
        let currNode = this.head

        while (currNode && (currNode.data !== item)) {
            currNode = currNode.next
        }

        return currNode
    }
    insert(element, item) {  // 向单链表中插入元素
        let temp = this.find(item)
        if (!temp) {
            return
        }
        let newNode = new Node(element)

        newNode.next = temp.next
        temp.next = newNode


    }
    remove(item) {  // 在单链表中删除一个节点
        if (!this.find(item)) {
            console.log('该节点不存在')
            return
        }

        //删除头节点
        if (item == 'head') {
            if (!this.isEmpty()) {
                return
            } else {
                this.head.next = null
                return
            }
        }

        //删除除头以外的节点
        let currNode = this.head
        while (currNode.next.data !== item) {
            //企图删除不存在的节点
            if (!currNode.next) {
                return
            }
            currNode = currNode.next
        }
        currNode.next = currNode.next.next
        this.size--
    }

    append(element) {  // 在单链表的尾部添加元素
        let last = this.findLast()
        let newNode = new Node(element)

        last.next = newNode
        this.size++
    }

    findLast() {  // 获取单链表的最后一个节点
        let temp = this.head
        while (temp.next) {
            temp = temp.next
        }
        return temp
    }

    isEmpty() {  // 判断单链表是否为空
        return this.size == 0
    }

    show() {  // 显示当前节点
        return this.currNode
    }
    getLength() {  // 获取单链表的长度
        return this.size
    }
    advance(n, currNode) {  // 从当前节点向前移动n个位置
        this.currNode = currNode

        while ((n--) && this.currNode.next) {
            this.currNode = this.currNode.next
        }

        return this.currNode
    }
    display() {  // 单链表的遍历显示
        let currNode = this.head
        let res = currNode.data

        while (currNode.next) {
            currNode = currNode.next
            res += " -> " + currNode.data
        }

        return res
    }
    clear() {   // 清空单链表
        this.head.next = null
        this.size = 0
    }
}

var l1 = new SingleList(3)
l1.append(6)
l1.append(5)

var l2 = new SingleList(9)
l2.append(3)
l2.append(4)

// console.log(l1.display(), '\n', l2.display())

function add(l1, l2)  {
    let carry = 0
    let sum, res = new SingleList('head')
    while(l1 || l2 || carry != 0) {
        let num1 = l1 ? l1.data : 0
        let num2 = l2 ? l2.data : 0 
        sum = num1 + num2 + carry
        carry = Math.floor(sum / 10)
        l1 = l1.next != null ? l1.next : 0
        l2 = l2.next != null ? l2.next : 0
        res.append(sum % 10)

        // console.log('sum', sum, 'carry', carry)
    }

    console.log('结果链表', res.display())
}

add(l1.head, l2.head)



let l5 = new SingleList(9)
l5.append(9)
l5.append(9)
l5.append(9)
l5.append(9)
l5.append(9)

let l4 = new SingleList(9)
l4.append(9)
l4.append(9)
l4.append(9)

add(l5.head, l4.head)