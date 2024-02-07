# Declartive Linked List

### Declarative Linked List is a Node.js library that provides a straightforward and intuitive way to work with linked lists using higher-order functions. It allows you to manipulate linked lists in a declarative manner, making your code more concise and expressive.

### Installation

You can install Declarative Linked List via npm:
```
npm install declarative-linked-list
```
### Get Started:
```javascript
const DoublyLinkedList = require('declarative-linked-list');
```
Create a new linked list.
```javascript
const list = new DoublyLinkedList();
```
Prepend elements to the list.
```javascript
list.Prepend(1);
list.PrependMany(2, 3, 4);
```
Append elements to the list
```javascript
list.Append(3);
list.AppendMany(4, 5, 6);
```
Print out the list in a readable format.
```javascript
const display = list.PrintForward()
const display = list.PrintBackward()
```
Insert element at a specific index.
```javascript
list.InsertAt(2, 10);
```
Delete the first element.
```javascript
list.DeleteFirst();
```
Delete the last element.
```javascript
list.DeleteLast();
```
Delete element at a specific index.
```javascript
list.DeleteAt(2);
```
Copy the hole linked list or a portion of it.
```javascript
const copy = list.Copy();
const copyPortion = list.Copy(1, 3);
```
Reverse the linked list, returns a copy.
```javascript
const reversed = list.Reverse();
```
Concatenate two linked lists
```javascript
const list2 = new DoublyLinkedList();
list2.Append(5);
list.Concat(list2);
```
Convert the linked list to array or string.
```javascript
const arr = list.ToArray();
const str = list.ToString();
```
Apply a function to each element in the list in place.
```javascript
list.ForEach(x => x * 2);
```
Map each element in the list to a new value.
```javascript
const mappedList = list.Map(x => x * 2);
```
Filter elements based on a condition.
```javascript
const filteredList = list.Filter(x => x < 5);
```
Find the first occurrence of an element that satisfies a condition.
```javascript
const found = list.Find(x => x === 3);
```
Find the last occurrence of an element that satisfies a condition.
```javascript
const lastFound = list.FindLast(x => x === 3);
```
Find the index of the first occurrence of an element that satisfies a condition.
```javascript
const index = list.FindIndex(x => x === 3);
```
Find the index of the last occurrence of an element that satisfies a condition.
```javascript
const lastIndex = list.FindLastIndex(x => x === 3);
```
Reduce the elements of the list to a single value
```javascript
const sum = list.Reduce((acc, curr) => acc + curr, 0);
```
Sort the elements of the list.
- Numbers
```javascript
const sortedList = list.Sort((a, b) => a - b); 
```
- Strings
```javascript
const sortedList = list.Sort((a, b) => a.localeCompare(b));
```
- Have fun with it, Here is an example of ordering according to card symbols.
```javascript
const goalOrder = ['A', 'K', 'Q', 'J']
const sortedList = list.Sort((a, b) => goalOrder.indexOf(a) < goalOrder.indexOf(b) ? -1 : 1);
```
### API Methods:

- Prepend(value): Inserts an element at the beginning of the list.

- Append(value): Inserts an element at the end of the list.

- PrependMany(...values): Inserts multiple elements at the beginning of the list.

- AppendMany(...values): Inserts multiple elements at the end of the list.

- InsertAt(index, value): Inserts an element at a specific index in the list.

- DeleteFirst(): Deletes the first element of the list.

- DeleteLast(): Deletes the last element of the list.

- DeleteAt(index): Deletes the element at a specific index in the list.

- Copy(): Copy the hole linked list.

- Copy(startIndex, endIndex): Copies a portion of the list specified by the start and end indices.

- Reverse(): Reverses the order of elements in the list.

- Concat(otherList): Concatenates the current list with another list.

- ForEach(callback): Applies a function to each element in the list.

- Map(callback): Maps each element in the list to a new value using a function.

- Filter(predicate): Filters elements based on a condition.

- Find(predicate): Finds the first element that satisfies a condition.

- FindLast(predicate): Finds the last element that satisfies a condition.

- FindIndex(predicate): Finds the index of the first element that satisfies a condition.

- FindLastIndex(predicate): Finds the index of the last element that satisfies a condition.

- Reduce(callback, initialValue): Reduces the elements of the list to a single value.

- Sort(compareFunction): Sorts the elements of the list using a compare function.

### Contributing:
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request on GitHub.

### License
This project is licensed under the standard ISC License.

Feel free to customize the README further based on your preferences and additional information you'd like to include!
