import './Newsletter.scss';



export default function Newsletter() {
  return (
    <div className='newsletter'>
      <div className='wrapper newsletter-wrapper'>
        <h1>Get exclusive offers on your email</h1>
          <p>Subscribe to us and get our offers</p>
          <div className='newsletter__subscribe'>
            <input type="email" placeholder='enter your email' />
            <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
