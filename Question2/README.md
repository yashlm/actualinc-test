# Singly Linked List Merge

## Description
This code implements a function to merge two sorted singly linked lists into a single sorted linked list. The merging process maintains the order of elements, resulting in a merged list that is also sorted.

## Features
- **Merging Functionality**: Merges two sorted linked lists into one.
- **Dynamic Memory Management**: Uses dynamic memory allocation to create linked list nodes.
- **User Input**: Accepts user input to create and merge the linked lists.

## Code Structure
- **SinglyLinkedListNode**: A structure representing a node in the singly linked list, containing an integer data field and a pointer to the next node.
- **mergeLists**: A function that takes the heads of two sorted linked lists and returns the head of the merged sorted list.
- **createList**: A helper function that creates a singly linked list from a vector of integers.
- **printList**: A helper function that prints the elements of a linked list.

## Usage
1. **Input Format**:
    - First, input the number of test cases `t`.
    - For each test case:
      - Input the number of elements in the first list `n`, followed by `n` integers representing the elements of the first list.
      - Input the number of elements in the second list `m`, followed by `m` integers representing the elements of the second list.
  
2. **Output**: The program outputs the merged sorted linked list for each test case.
