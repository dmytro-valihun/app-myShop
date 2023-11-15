import './Login.scss';



export default function Login() {
  return (
    <div className='login'>
      <div className="login__container">
        <h1>Sign up</h1>

        <div className='login__fields'>
          <label>
            Name <input type="text" placeholder='enter your name' />
          </label>
          <label>
            Email <input type="email" placeholder='enter your email' />
          </label>
          <label>
            Password <input type="password" placeholder='enter your password' />
          </label>
          <label>
            <input type="checkbox" name='terms' className='login__check' /> I agree with terms of use & privacy policy 
          </label>
        </div>
        <div className='login__sign'>
          <button className='login__sign-btn'>Sign up</button>
          <div>Already have an account? <span>Login here</span></div>
        </div>
      </div>
    </div>
  )
}
