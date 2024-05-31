// Input: head = [1,1,2]
// Output: [1,2]

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}


function deleteAllNodesWithDuplicate(head) {
    let curr = head

    while (curr && curr.next) {
        if (curr.value === curr.next.value) {
            curr.next = curr.next.next
        }
        else {
            curr = curr.next
        }
    }
    return head
}

const list = new Node(1)
list.next = new Node(1)
list.next.next = new Node(2)


function PrintList(head) {
    let temp = head

    while (temp) {
        console.log(temp.value);
        temp = temp.next
    }
}


console.log("before");
PrintList(list)
deleteAllNodesWithDuplicate(list)
console.log("after");
PrintList(list)