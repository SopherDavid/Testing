import {expect, test} from 'vitest'
import {sum } from './excersize'


test ('adds a + b', () => {
    expect(sum(1,2)).toBe(3)
})

