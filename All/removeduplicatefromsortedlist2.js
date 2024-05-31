// Input: head = [1,2,2,2,3,4,4,5]
// Output: [1,3,5]

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function removeDuplicates(head) {
    let curr = head
    let next = curr.next

    while (next !== null) {
        if (next.value === curr.value) {
            next = next.next
            continue
        }

        curr.next = next
        curr = next
        next = next.next
    }

    curr.next = null
    return head
}


function PrintList(head) {
    let temp = head

    while (temp) {
        console.log(temp.value)
        temp = temp.next
    }
}


const list = new Node(1)
list.next = new Node(2)
list.next.next = new Node(2)
list.next.next.next = new Node(2)
list.next.next.next.next = new Node(3)
list.next.next.next.next.next = new Node(4)
list.next.next.next.next.next.next = new Node(4)
list.next.next.next.next.next.next.next = new Node(5)

console.log("Before");
PrintList(list)
removeDuplicates(list)
console.log("After");
PrintList(list)


