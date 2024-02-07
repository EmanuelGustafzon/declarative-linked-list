class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
  }
  
  class DoublyLinkedList 
  {
    constructor() 
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    Size()
    {
      return this.size;
    }
    IsEmpty()
    {
      return this.size === 0;
    }
    Prepend(value) 
    {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    PrependMany(...values) {
        for (let i = values.length - 1; i >= 0; i--) {
            this.Prepend(values[i]);
        }
    }
    Append(value) 
    {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }
    AppendMany(...values) 
    {
        for (let i = values.length - 1; i >= 0; i--) {
            this.Append(values[i]);
        }
    }
    InsertAt(index, data) 
    {
        if (index < 0) {
            throw new Error("Index cannot be a a negative number");
        }
  
        const newNode = new Node(data);
  
        if (index === 0) {
            newNode.next = this.head;
            if (this.head) {
                this.head.prev = newNode;
            } else {
                this.tail = newNode;
            }
            this.head = newNode;
        } else {
            let current = this.head;
            let currentIndex = 0;
  
            while (current && currentIndex < index) {
                current = current.next;
                currentIndex++;
            }
  
            if (!current && currentIndex < index) {
                throw new Error("Index out of range");
            }
  
            newNode.next = current;
            newNode.prev = current.prev;
            current.prev.next = newNode;
            current.prev = newNode;
            this.size++;
        }
    }
    DeleteFirst() 
    {
        if (!this.head) {
            return;
        }
        const removedData = this.head.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return removedData;
    }
    DeleteLast() 
    {
        if (!this.tail) {
            return;
        }
        const removedData = this.tail.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return removedData;
    }
    DeleteAt(index)   
    {
        if (index < 0) {
            throw new Error("Index cannot be a a negative number");
        }
  
        if (index === 0) {
            if (this.isEmpty()) {
                throw new Error("List is empty, nothing to delete");
            }
            const removedData = this.head.data;
            this.head = this.head.next;
            if (this.head) 
              {
                this.head.prev = null;
              } else 
              {
                this.tail = null;
              }
            return removedData;
        }
  
        let current = this.head;
        let currentIndex = 0;
  
        while (current && currentIndex < index) 
          {
            current = current.next;
            currentIndex++;
          }
  
        if (!current && currentIndex < index)   
          {
            throw new Error("Index out of range");
          }
        this.size--;
        const removedData = current.data;
      
        current.prev.next = current.next;
        if (current.next) 
          {
            current.next.prev = current.prev;
          } else 
          {
            this.tail = current.prev;
          }
        return removedData;
    }
    PrintForward() {
        const result = [];
        let currentNode = this.head;
        while (currentNode) {
            result.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return result.join(', ');
    }
    PrintBackward() {
        const result = [];
        let currentNode = this.tail;
        while (currentNode) {
            result.push(currentNode.data);
            currentNode = currentNode.prev;
        }
        return result.join(', ');
    }
    Copy(startIndex = 0, endIndex = this.size -1) 
    {
        if (startIndex < 0 || endIndex >= this.size || startIndex > endIndex) {
            throw new Error("Invalid start or end index");
        }
    
        const newList = new DoublyLinkedList();
        let count = 0;
        let current = this.head;
    
        while (current && count <= endIndex) {
            if (count >= startIndex) {
                newList.Append(current.data);
            }
            current = current.next;
            count++;
        }
    
        return newList;
    }
    ToString()
    {
      let result = "";
      let current = this.head;
      while(current) {
        result += current.data + " ";
        current = current.next;
      }
      return result;
    }
  
    ToArray(){
      const result = [];
      let current = this.head;
      while(current) {
        result.push(current.data);
        current = current.next;
      }
      return result;
    }
    Concat(list)
    {
      if(!list) {
        return;
      }
      if(this.isEmpty()) {
        this.head = list.head;
        this.tail = list.tail;
      } else {
        this.tail.next = list.head;
        list.head.prev = this.tail;
        this.tail = list.tail;
      }
      this.size += list.size;
    }
    Reverse()
    {
      let result = new DoublyLinkedList();
      let current = this.head;
      while(current){
        result.Prepend(current.data);
        current = current.next;
      }
      return result;
    }
    ForEach(callback)
    {
      let current = this.head;
      while (current) {
        current.data = callback(current.data);
        current = current.next;
      }
    }
    Map(callback)
    {
      let result = new DoublyLinkedList()
      let currentNode = this.head;
      while(currentNode)
        {
          result.Append(callback(currentNode.data))
          currentNode = currentNode.next;
        }
      return result;
    }
    Filter(callback)
    {
      let result = new DoublyLinkedList()
      let currentNode = this.head;
      while(currentNode)
        {
          if(callback(currentNode.data))
          {
        result.Append(currentNode.data)
          }
          currentNode = currentNode.next;
        }
      return result;
    }
    Find(callback)
    {
      let currentNode = this.head;
      while(currentNode)
        {
          if(callback(currentNode.data))
          {
          return currentNode.data
          }
          currentNode = currentNode.next;
        }
      return null;
    } 
    FindLast(callback)
    {
      let currentNode = this.tail;
      while(currentNode)
        {
          if(callback(currentNode.data))
          {
          return currentNode.data
          }
          currentNode = currentNode.prev;
        }
      return null;
    }
    FindIndex(callback)
    {
      let currentNode = this.head;
      let index = 0;
      while(currentNode)
        {
          if(callback(currentNode.data))
          {
          return index;
          }
          index++
          currentNode = currentNode.next;
        }
      return -1;
    }
    FindLastIndex(callback)
    {
      let currentNode = this.tail;
      let index = this.size;
      while(currentNode)
        {
          if(callback(currentNode.data))
          {
          return this.size-(this.size - index) -1;
          }
          index--
          currentNode = currentNode.prev;
        }
      return -1;
    }
    Reduce(callback, initialValue)
    {
      let accumulator = initialValue ? initialValue : this.head.data;
      
      let currentNode = initialValue ? this.head : this.head.next;
      
      while(currentNode !== null)
        {
          accumulator = callback(currentNode.data, accumulator)
          currentNode = currentNode.next;
        }
      
      return accumulator;
    }
  
    Sort(compareFunction) {
      const sortedList = new DoublyLinkedList();
      if (this.size < 2) {
        sortedList.head = this.head;
        sortedList.tail = this.tail;
        return sortedList;
    }
      
      sortedList.head = mergeSort(this.head);
    
      function mergeSort(head) 
      {
          if (!head || !head.next) {
              return head;
          }
          const middle = getMiddle(head);
          const nextToMiddle = middle.next;
          middle.next = null;
          nextToMiddle.prev = null;
          const left = 
            mergeSort(head);
          const right = mergeSort(nextToMiddle);
          return merge(left, right);
      }
    
      function merge(left, right) 
      {
          let result = null;
          if (!left) {
              return right;
          }
          if (!right) {
              return left;
          }
          if (compareFunction(left.data, right.data) < 0) {
              result = left;
              result.next = merge(left.next, right);
              result.next.prev = result;
          } else {
              result = right;
              result.next = merge(left, right.next);
              result.next.prev = result;
          }
          return result;
      }
        function getMiddle(head) 
        {
            let fast = head;
            let slow = head;
            while (fast.next && fast.next.next) {
                fast = fast.next.next;
                slow = slow.next;
            }
            return slow;
        }
        // add the tail
        let current = sortedList.head;
        while (current.next) {
            current = current.next;
        }
        sortedList.tail = current;
        
      return sortedList;
      }
  }

module.exports = DoublyLinkedList;