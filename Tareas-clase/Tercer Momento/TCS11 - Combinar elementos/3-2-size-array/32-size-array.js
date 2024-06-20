'use strict'
//Ejercicio 1

let nums = [0, 2, 4, 8];

function concatenate(nums) {
    for (let i = 0; i < nums.length; i++) {
        let result = "";
        for (let j = 0; j < nums.length; j++) {
            result += nums[i].toString() + nums[j].toString() + " ";
        }
        alert(result.trim());
    }
}

concatenate(nums);
