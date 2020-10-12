/* 
                                                        Two number sum

    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// Given array
given_array = [3,2,6,7,9,-2,12,0]
target = 21

// First method
/* 
    Here we using 2 "for" cycles , and as a result we getting n^2 complexity
    We going through the each value in the array and checking is the sum with any other 
    gives us a sum target values, if not, returning empty array

    Time Complexity = O(n^2)
    Space Complexity = O(1)
*/
function first_variant(array, target) {
    for(i = 0;i < array.length - 1;i++){
        for(j = i + 1;j < array.length;j++) {
            if(array[i] + array[j] === target) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
} 

// Second method 
/*
    Here we using additional space for the containing hash-table, due to extra space 
    space comlexity is O(n). 

    We know,that target value is the sum of x and y items of out array so that:
    
    target = x + y
    y = target - x

    Ex:
    target = 10
    [2,12,3,6,5,9,8]
    hash_table {}

    1)
    x = 2
    y = 10 - 2 => 8 so 8 is not in the hash_table, we are sending the x
    2)
    hash_table {
        2 : true
    }
    x = 12
    y = 10 - 12 => -2 that is also not in the hash table,so we are adding that 
    ...)
    hash_table {
        2 : true ...
    }
    x = 8
    y = 10 - 8 => 2 and that's already in the hash table .We found it!

    but why we are searching especially for the y - x, and adding to the hash table x?

    Ex: 
    32 - 10 = 22
    32 - 22 = 10
    if any of the numbers give us as the result x it means that their sum is gonna give us back target value
    10 + 22 = 32!

    We are checking is the number already been in the hash table

    Time Complexity = O(n)
    Space Complexity = O(n)
*/
function second_variant(array, target) {
    hash_table = {}
    
    for(i = 0;i < array.length;i++) {
        x = array[i];
        if(target - x in hash_table) {
            return [target - x, x];
        } else {
            hash_table[x] = true;
        }

    }
    return [];
}

// Third method
/*
    Here we are using the pointers left and right and the sorted list
    we are going through the loop until sum of items in this pointer will equals to the target value
    if sum of them is smaller so we are moving pointer to the right
    but why to the right?
    Ex: 
    [0 4 6 12 22 23 36]
    l = 4
    r = 23
    t = 35

    l + r = 27
    if we move l to the right sum will be increased too,
    l = 6
    l + r = 29
    if we move r to the left sum will be decreased too
    r = 22
    l + r = 26

    Time Complexity = O(n * sort_method_timeComplexity)
    Space Complexity = O(1)
*/

function third_variant(array, target) {
    array.sort();

    left = 0;
    right = array.length - 1;

    while(left < right) {
        if(array[left] + array[right] < target) {
            left += 1;
        }
        else if(array[left] + array[right] > target) {
            right -= 1;
        }
        else if(array[left] + array[right] == target) {
            return [array[right], array[left]];
        }
        else {
            continue;
        }
    }
    return [];
}

// Print out of the result

console.log(`First variant is : ${first_variant(given_array, target)}`);
console.log(`Second variant is : ${second_variant(given_array, target)}`);
console.log(`Third variant is : ${third_variant(given_array, target)}`);