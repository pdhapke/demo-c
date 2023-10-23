import Home from './page'
import {render, screen} from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

test('should render the main page', () => {
    render(<Home></Home>)

    expect(screen.getByText('Hello ISU - This is a template')).toBeVisible()
})

test('should have a button called "Press Me"', () => {
    render(<Home></Home>)

    expect(screen.getByRole('button', {name: 'Press Me'})).toBeVisible();
});


test('when a user presses "Press Me" should tell the user the button was pressed ', async () => {
    //arrange
    render(<Home></Home>);
    
    //act 
    await userEvent.click(screen.getByRole('button', {name: /press me/i}));
   
    //assert
    expect(screen.getByText(/you pressed the button/i)).toBeVisible();
});