# Asynchronous JavaScript

JavaScript is single-threaded but non-blocking.
Async lets JS continue running other tasks while waiting for slow operations.

## Scenarios

1. Independent tasks (easy):
No dependencies — JS can fetch data, render UI, and handle clicks at the same time.

2. Dependent tasks (hard):
Task B must wait for Task A. We need tools to control order.

## Solutions

1. Callbacks – pass a function to run after a task:

2.  Promises – handle future values cleanly:

3. async/await – write async code like normal code:
