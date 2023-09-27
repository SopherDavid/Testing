import { describe, expect, test } from "vitest";

import * as allTests from './excersize'

describe("check string length", () => {
    test('stringLength', () => {
       
        //Arrange
        const a = "DavidSopher"
       
        //Act
        const result = allTests.stringLength(a)

        //Assert
        expect(result).toBe(11)
    })


    
})

describe ("sum numbers", () => {
    test('sum', () => {
    //Arrange
    const a = 1
    const b = 2
   
    //Act
    const result = allTests.sum(a,b)

    //Assert
    expect(result).toBe(3)
    })
})

describe("Check if string is palindrome", () => {
    test('isPalindrome', () =>{
        //Arrange 
        const str = 'abba'

        //Act
        const result = allTests.isPalindrome(str)

        //Assert
        expect(result).toBe(true)

    })
})

describe("Sort given numbers low to high", () => {
    test('arrangeLth', () => {
        // Arrange
        const arr = [1, 5, 2, 55, 7, 8, 4, 90, 151];

        // Act
        const result = allTests.arrangeLth(arr);

        // Assert
        expect(result).toEqual([1, 2, 4, 5, 7, 8, 55, 90, 151]);
    });
});

describe('find the square root',() => {
    test('findSqrt', () =>{
        //Arrange
        const num = 16

        //Act
        const result = allTests.findSqrt(num)

        //Assert
        expect(result).toBe(4)
    })

})

describe('sum all of numbers in array', () => {
    test('sumArray', () => {
        //Arrange
        const num = [1,2,3]

        //Act 
        const result = allTests.sumArray(num)

        //Assert 
        expect(result).toBe(6)
        expect(result).toBeGreaterThan(4)
        expect(num).contain(1)
    } )
})



