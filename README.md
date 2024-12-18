# Unexpected Output with + operator due to Type Coercion in Javascript
This example demonstrates how Javascript's type coercion behavior with the '+' operator can lead to unexpected results.  When one operand is a string, the '+' operator performs string concatenation instead of numerical addition. This can be confusing and lead to errors if not handled carefully.

## Bug
The `foo` function intends to add two numbers. However, due to type coercion, unexpected outputs are produced when mixing strings and numbers as inputs.

## Solution
The solution involves explicit type checking or using a different operator for numerical addition.
