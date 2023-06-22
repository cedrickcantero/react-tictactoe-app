import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './components/Board';

test('renders all the squares with correct values', () => {
    const squares = ['X', 'O', null, 'X', null, 'O', null, null, null];
    const onClick = jest.fn();
    const { queryAllByText, container } = render(<Board squares={squares} onClick={onClick}/>);

    squares.forEach((value) => {
        if(value) {
            const squareElements = queryAllByText(value)
            expect(squareElements.length).toBe(2);
        }
    })

    console.log(container.innerHTML);
})

test('calls onClick event when a square is clicked', () => {
    const squares = [null, null, null, null, null, null, null, null, null];
    const onClick = jest.fn();

    const { getByTestId } = render(
        <Board squares={squares} onClick={onClick}/>
    );

    fireEvent.click(getByTestId('square-1'));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(1);
})