const DoublyLinkedList = require('declarative-linked-list');

test('prepend-to-list', () => {
    const list = new DoublyLinkedList();
    list.Prepend(1);
    list.Prepend(2);
    const result = list.head.data;
    expect(result).toBe(2);
});

test('append-to-list', () => {
    const list = new DoublyLinkedList();
    list.Append(1);
    list.Append(2);
    const result = list.head.next.data;
    expect(result).toBe(2);
});

test('prepend-many-to-list', () => {
    const list = new DoublyLinkedList();
    list.Append(10);
    list.PrependMany(1, 2, 3, 4, 5);
    const result = list.PrintForward()
    expect(result).toEqual("1, 2, 3, 4, 5, 10");
});

test('Apend-many-to-list', () => {
    const list = new DoublyLinkedList();
    list.Append(10);
    list.AppendMany(1, 2, 3, 4, 5);
    const result = list.PrintForward()
    expect(result).toEqual("10, 5, 4, 3, 2, 1");
});

test('insert-at-to-list', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    list.InsertAt(2,10)
    const result = list.PrintForward()
    expect(result).toEqual("1, 2, 10, 3, 4, 5");
});

test('get-item-by-index', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    const get3 = list.Get(3)
    const get0 = list.Get(0)
    const get4 = list.Get(4)
    expect(get3).toBe(4)
    expect(get0).toBe(1)
    expect(get4).toBe(5)
})
test('delete-first', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    list.DeleteFirst()
    const result = list.PrintForward()
    expect(result).toEqual("2, 3, 4, 5");
});

test('delete-last', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    list.DeleteLast()
    const result = list.PrintForward()
    expect(result).toEqual("1, 2, 3, 4");
});

test('delete-at-index', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    list.DeleteAt(2)
    const result = list.PrintForward()
    expect(result).toEqual("1, 2, 4, 5");
});

test('copy-linkedlist', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    const copy = list.Copy(1,3)
    const result = copy.PrintForward()
    expect(result).toEqual("2, 3, 4");
    expect(copy.head.data).toBe(2)
    expect(copy.tail.data).toBe(4)
});


test('reverse-linkedlist', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    const reversed = list.Reverse()
    const result = reversed.PrintForward()
    expect(result).toEqual("5, 4, 3, 2, 1");
    expect(reversed.head.data).toBe(5)
    expect(reversed.tail.data).toBe(1)
});

test('concat-2-linkedlist', () => {
    const list = new DoublyLinkedList();
    const list2 = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    list2.PrependMany(1, 2, 3, 4, 5);
    list.Concat(list2)
    const result = list.PrintForward()
    expect(result).toEqual("1, 2, 3, 4, 5, 1, 2, 3, 4, 5");
    expect(list.head.data).toBe(1)
    expect(list.tail.data).toBe(5)
});

test('foreach-method', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    list.ForEach(x => x*2)
    const result = list.PrintForward()
    expect(result).toEqual("2, 4, 6, 8, 10");
    expect(list.head.data).toBe(2)
    expect(list.tail.data).toBe(10)
});

test('map-method', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    const newList = list.Map(x => x*2)
    const result = newList.PrintForward()
    expect(result).toEqual("2, 4, 6, 8, 10");
    expect(newList.head.data).toBe(2)
    expect(newList.tail.data).toBe(10)
});

test('filter-method', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    const newList = list.Filter(x => x < 3)
    const result = newList.PrintForward()
    expect(result).toEqual("1, 2");
    expect(newList.head.data).toBe(1)
    expect(newList.tail.data).toBe(2)
});

test('find-method', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    const found = list.Find(x => x === 3)
    expect(found).toBe(3);
});

test('find-last-method', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    const found = list.FindLast(x => x === 3)
    expect(found).toBe(3);
});

test('find-index-method', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5, 3);
    const found = list.FindIndex(x => x === 3)
    expect(found).toBe(2);
});

test('find-last-index-method', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5, 3);
    const found = list.FindLastIndex(x => x === 3)
    expect(found).toBe(5);
});

test('reduce-method', () => {
    const list = new DoublyLinkedList();
    list.PrependMany(1, 2, 3, 4, 5);
    const sum = list.Reduce((acc, curr) => acc + curr, 0)
    expect(sum).toBe(15);
});

test('sort-method', () => {
    const list = new DoublyLinkedList();
    const nums = new DoublyLinkedList();
    const letters = new DoublyLinkedList();

    const order = ['A', 'K', 'Q', 'J']

    list.PrependMany('K', 'J', 'J', 'A');
    nums.PrependMany(1, 20, 2, 3, 5);
    letters.PrependMany('a', 'c', 'b', 'a');

    const sortAccordingly = list.Sort((a,b) => order.indexOf(a) > order.indexOf(b) ?1 : -1);
    const sortNums = nums.Sort((a,b) => a-b);
    const sortLetters = letters.Sort((a,b) => a.localeCompare(b));

    const a = sortAccordingly.PrintForward()
    const b = sortNums.PrintForward()
    const c = sortLetters.PrintForward()

    expect(a).toEqual("A, K, J, J");
    expect(b).toEqual("1, 2, 3, 5, 20");
    expect(c).toEqual("a, a, b, c");

    expect(sortAccordingly.head.data).toBe("A")
    expect(sortNums.head.data).toBe(1)
    expect(sortLetters.head.data).toBe("a")

    expect(sortAccordingly.tail.data).toBe("J")
    expect(sortNums.tail.data).toBe(20)
    expect(sortLetters.tail.data).toBe("c")
});