import React from 'react';
import "../App.css";
import picture from "./Professional way.jpg";

//

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="logo_twitter">
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"/>
        </svg>
      </div>

      <div className="header">
        <h1>Happening now</h1>
      </div>

      <div className="join_now">
        <h2>Join Twitter today.</h2>
      </div>

      <div className="sign-with-google">
        <div className="image">
          <img src={picture} alt="user_alvatar" />
        </div>

        <div className="gmail--sign-in">
          <h3>Sign in as Nathanael</h3>
          <blockquote>oluwakayodenathanael@gmail.com</blockquote>
        </div>

        <div className="logo_google">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24   48z"></path><path fill="none" d="M0       0h48v48H0z"></path></g></svg>
        </div>
      </div>

      <div className="sign-with-apple">
        <div className="logo_apple">
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z"/><path d="M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z"/>
        </svg>
        </div>

        <div className="header">
          <h3>Sign up with Apple</h3>
        </div>
      </div>

      <div className="or">
        <div><hr className='firstLine' /></div> 
        <div>or</div> 
        <div><hr className='secondLine' /></div>
      </div>

      <div className="sign-with-phone">
        <h4>Sign up with a phone number or email address.</h4>
      </div>

      <div className="terms">
        <p>By signing up, you agree to the 
          <a href="https://twitter.com/tos"> Terms of Service </a> and <a href="https://twitter.com/privacy">Privacy Policy</a>, including <a href="https://help.twitter.com/rules-and-policies/twitter-cookies">Cookie Use.</a>
        </p>
      </div>      

      <div className="login">
        <div className="login-title">
          <h3>Already have an account?</h3>
        </div>

        <div className="sign-in">
          <h4>Sign in</h4>
        </div>
      </div>
    </div>
  )
}

export default Rightbar;