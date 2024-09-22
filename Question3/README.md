# First Variation on Caesar Cipher

## Description
This code implements a function to encode a given string using a shifting algorithm. Each character in the string is shifted based on its position and a specified shift value. The encoded message is then divided into five parts, which can be useful for certain encoding schemes.

## Features
- **Character Shifting**: Shifts each letter in the string by a specified amount, influenced by its index.
- **Preservation of Non-Alphabet Characters**: Non-alphabet characters remain unchanged.
- **Divided Output**: The final encoded string is split into five parts of approximately equal length.

## Code Structure
- **movingShift**: A function that takes a string and a shift value, performs the encoding, and returns a vector of five encoded string parts.
- **main**: The entry point of the program that reads input, calls the encoding function, and displays the output.

## Usage
1. **Input Format**:
    - Input a string to be encoded.
    - The shift value is hardcoded as `1` in the main function.

2. **Output**: The program outputs the encoded message divided into five parts.
