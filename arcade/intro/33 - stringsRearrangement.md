# Description
Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

**Example**

*   For `inputArray = ["aba", "bbb", "bab"]`, the output should be  
    `stringsRearrangement(inputArray) = false`;

    All rearrangements don't satisfy the description condition.

*   For `inputArray = ["ab", "bb", "aa"]`, the output should be  
    `stringsRearrangement(inputArray) = true`.

    Strings can be rearranged in the following way: `"aa", "ab", "bb"`.  
    **Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.string inputArray**

    A non-empty array of strings of lowercase letters.

    _Guaranteed constraints:_  
    `2 ≤ inputArray.length ≤ 10`,  
    `1 ≤ inputArray[i].length ≤ 15`.

*   **[output] boolean**