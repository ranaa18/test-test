import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import NavbarComponent from '../Components/Navbar/NavbarComponent';
import App from '../App';

it('test search', async () => {
    render(<NavbarComponent title="" />)
    const element = screen.getByRole("button", { name: 'Sign up' })
})
it('test placeholder search', async () => {
    render(<NavbarComponent />)
    const placeholderTest = screen.getByPlaceholderText('search...')

})

it('test value search', async () => {
    render(<NavbarComponent
        search={""}
        setSearch={() => { }} />)
    const searchInput = screen.getByPlaceholderText('search...')
    fireEvent.change(searchInput, { target: { value: 'test' } })
    expect(searchInput.value).toBe('test')

})




