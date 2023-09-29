import { screen, render, fireEvent } from "@testing-library/react";

import LoginForm, { Props } from "./LogingForm";

const renderLoginForm = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    shouldRemember: false,
    onUsernameChange () {
      return;
    },
    onPasswordChange () {
      return;
    },
    onRememberChange () {
      return;
    },
    onSubmit () {
      return;
    }
  }

  return render(<LoginForm {...defaultProps} {...props} />)
}

describe("<LoginForm />", () => {
  it("should display a blank login form, with remember me checked by default", async () => {
    renderLoginForm()
    expect(await screen.findByTestId('login-form')).toHaveFormValues({
      username: '',
      password: '',
      remember: false
    })
  });

  it('should allow typing a username', async ()=> {
    const mockOnUsernameChange = jest.fn() // mocking the function onUsernameChange
    const onUsernameChange = mockOnUsernameChange
    renderLoginForm({ onUsernameChange })

    fireEvent.change( await screen.findByTestId('username'), { target: { value: 'Witt@cap.com' }})
    expect(await screen.findByLabelText('Username:')).toBeTruthy()
    expect(onUsernameChange).toHaveBeenCalledWith('Witt@cap.com')
  })

  it('should allow entering a password', async ()=> {
    const mockOnPasswordChange = jest.fn() // mocking the function onPasswordChange
    const onPasswordChange = mockOnPasswordChange
    renderLoginForm({ onPasswordChange })

    fireEvent.change( await screen.findByTestId('password'), { target: { value: 'WYAY123456' }})
    expect(await screen.findByLabelText('Password:')).toBeTruthy()
    expect(onPasswordChange).toHaveBeenCalledWith('WYAY123456')
  })

  it.skip('should enable toggling remember me', async ()=> {
  })

  it.skip('should submit the form with username, password, and remember values', async ()=> {
  })
});