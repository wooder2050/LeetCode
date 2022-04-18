/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const num1 = [];
    const num2 = [];
    let cnt = 0;
    
    const makeArr = (list,target) => {
        target.push(list.val)
        cnt++;
        if(!list.next) return;
        makeArr(list.next,target)  
    }
    
    makeArr(l1,num1);
    cnt = 0;
    makeArr(l2,num2);
    
    const answer = [];
    const maxLen = Math.max(num1.length, num2.length);
    let plusNext = 0;
    for(let i = 0; i< maxLen; i++) {
        let newNum = plusNext;
        plusNext = 0;
        if(num1.length > i) newNum += num1[i];
        if(num2.length > i) newNum += num2[i];
        if(newNum > 9) {
            plusNext += 1;
            newNum -= 10;
        }
        answer.push(newNum)
    }
    
    if(plusNext) answer.push(plusNext)

    let head = answer.reverse().reduce((acc, curr) => {
        if (acc == null) acc = new ListNode(curr);
        else acc = new ListNode(curr, acc);
        return acc;
    }, null);
    return head;
};