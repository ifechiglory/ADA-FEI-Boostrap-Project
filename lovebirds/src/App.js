import './App.css';
import image from './Image 3.png';

function App() {
    return (
        <div className = "container-fluid">
            <div className = "row no-gutters">
                <div className = "col-12 col-lg-7 col-md-6 col-sm-12">
                    <img src={image} alt="lovebirds" className="img-responsive"></img>

                    <div className="img-text text-center">

                        <h4>Lorem ipsum dolor sit amet consectetur </h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium error culpa, fugit. 
                        </p>

                        <div className="circle active"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>

                <div className="col-12 col-lg-5 col-md-6 col-sm-12" id="login-form">
                    <div className="card">
                        <div className="card-body text-center">
                            <h3 className="card-header">Lovebirds</h3>

                            <h4 className="card-title text-muted">Welcome to Lovebirds</h4>
                        </div>

                        <div className="card-text">
                            <form method="GET" action="" id="form">
                                <div className="form-group">
                                    <label htmlFor="username">Users Email</label>
                                    <input type="email" id="username" title="xyz@example.com" required></input>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" required title="Password must contain minimum of 3 and maximum 6 letters" placeholder="******"></input>
                                </div>
                                {/* I tried using pattern attribute to validate the email and password input but it was not working. Had to resort to using JavaScript to validate the user input.*/}
                                <div className="form-group">
                                    <label id="error"></label>
                                    <label className="forgotpassword">Forgot password?</label>
                                </div>

                                <button type="submit" className="btn btn-secondary" id="submit">Sign In</button>
                            </form>

                            <div className="card-footer text-center">
                                <div className="card-text">
                                    
                                    <p className="hr-text">or</p>
                                    <p className="google">
                                        <span><i className="fa fa-google"></i> &nbsp; <a href="App.js">Sign in with Google</a></span>
                                    </p> 

                                    <p className="createaccount">New Lovebirds? <a href="App.js">Create account</a></p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
       
export default App;
