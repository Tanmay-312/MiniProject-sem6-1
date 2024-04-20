import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import Login and Register components
import Login from './login.js';
import Register from './register.js';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul className="nav-flex-row">
                        <li className="nav-item">
                            <a className='linker' href="#about-details">About</a>
                        </li>
                        <li className="nav-item">
                            <Link className='linker' to="/login">Login</Link> {/* Link to the Login component */}
                        </li>
                        <li className="nav-item">
                            <Link className='linker' to="/register">Register</Link> {/* Link to the Register component */}
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} /> {/* Route to the Login component */}
                    <Route path="/register" element={<Register />} /> {/* Route to the Register component */}
                </Routes>
            </div>  

            <section className="section-intro" id="about">
                <header>
                    <h1>Paw People</h1>
                    <p></p>
                    <h4>Central India's First Recovery Home for Street Dogs</h4>
                </header>
            </section>

            <section className="about-section" id="about-details">
                <article>
                    <p>
                    Welcome to our dog rescue and shelter!
                    At Paw People, we are dedicated to providing love, 
                    care, and a second chance to every dog in need.
                    Our mission is to rescue, rehabilitate, and 
                    re-home dogs, ensuring they find their forever homes.
                    With a team of passionate volunteers and staff, we 
                    work tirelessly to provide a safe and nurturing
                    environment for every furry friend meets us.
                    </p>
                    <p>
                    At our shelter, every dog receives personalized care, 
                    veterinary attention, and training to help them thrive. 
                    Whether they're a playful puppy or a senior dog seeking 
                    comfort, we provide the love and support they need. 
                    Through adoption events, community outreach, and education 
                    programs, we strive to raise awareness about responsible 
                    pet ownership and the importance of adoption.
                    </p>
                    <p>
                    Join us in our mission to make a difference in the lives
                    of dogs. Together, we can create a world where every dog
                    is valued, cherished, and loved.
                    </p>
                </article>
            </section>

            <div id="booking-section">
                <div className="container">
                    <div className="row-flex">
                        <div className="opening-time">
                            <h3>Opening times</h3>
                            <p>
                                <span>Monday—Thursday: 9:00 — 22:00</span>
                                <span>Friday—Sunday: 10:00 — 21:00 </span>
                            </p>
                        </div>
                        <div className="contact-address">
                            <h3>Contact</h3>
                            <p>
                                <span>hello@pawpeople.in</span>
                                <span>Neelbadh, Bhopal</span>
                                <span>Madhya Pradesh, India</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
