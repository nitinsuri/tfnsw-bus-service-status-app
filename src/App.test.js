import { render } from '@testing-library/react'
import App from './App'

test('loads and displays the app', () => {
  const app = render(<App />)
  expect(app).toMatchSnapshot()
})
