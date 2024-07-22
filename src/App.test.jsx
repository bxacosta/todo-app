import {describe, expect, test} from 'vitest'
import {render, screen} from '@testing-library/react'
import {App} from './App'

describe("App test", () => {
    test("should show title", () => {
        render(<App/>);
        expect(screen.getByText("To-Do App")).toBeDefined()
    })
})