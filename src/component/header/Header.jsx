import React, { useState, useEffect } from "react";
import "./header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png"
            alt="logo"
          />
        </div>
        <nav className="nav">
          <ul>
            <li className="dropdown" onClick={toggleDropdown}>
              Benefit <span className="arrow">&#9660;</span>
              {isDropdownVisible && (
                <div className="dropdown-content">
                  <p>Vishal</p>
                </div>
              )}
            </li>
            <li>Feature</li>
            <li>Blogs</li>
            <li>For US</li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="section-1">
          <div className="text-block">
            <h1>
              Lorem ipsum Lorem Lorem ipsum Lorem ipsum <span>Lorem ipsum</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="blue-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Services provided by auctor neque vitae tempus quam pellentesque,
              regulated by auctor magna massa.
            </p>
          </div>
          <div className="image-placeholder">
            <img
              src="https://images.pexels.com/photos/28378483/pexels-photo-28378483/free-photo-of-italy-24.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
            />
          </div>
        </section>

        <section className="section-2">
          <div className="image-placeholder">
            <img
              src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
            />
          </div>
          <div className="text-block">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </p>
          </div>
        </section>

        <div className="sec">
          <section className="section-3">
            <div className="text-white">
              <h1>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="image-placeholder">
              <img
                src="https://images.pexels.com/photos/12351172/pexels-photo-12351172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image"
              />
            </div>
          </section>
        </div>

        <section className="section-2">
          <div className="image-placeholder">
            <img
              src="https://images.pexels.com/photos/40896/larch-conifer-cone-branch-tree-40896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
            />
          </div>
          <div className="text-block">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </p>
          </div>
        </section>

        <section className="section-1">
          <div className="text-block">
            <h1>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="image-placeholder">
            <img
              src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
            />
          </div>
        </section>

        <div className="main">
          <div className="text">
            <h2>Vida et controla tus libros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              sunt! Illo asperiores maxime placeat repellat officia beatae saepe
              veniam possimus impedit deleniti ipsum consequatur eos obcaecati
              veritatis, ullam id sunt!
            </p>
          </div>

          <div className="card">
            <h2>Another Feature</h2>
            <p>Another description here...</p>
          </div>
          <div className="card">
            <h2>More Features</h2>
            <p>Details here...</p>
          </div>
        </div>

        <div className="vishal">
          <h1>
            <strong>vide et controla tua liberos</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            ad modi cum quos aliquid eos magnam dolore nemo a! Totam ad
            voluptates omnis quibusdam a ut ex ipsam esse quisquam.
          </p>
        </div>

        <div className="features">
          <div className="feature">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3578/3578796.png"
              alt="Feature 1"
            />
            <h2>mobile notifications</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              itaque qui
            </p>
          </div>
          <div className="feature">
            <img
              src="https://media.istockphoto.com/id/1372270592/vector/mobile-phone-notifications.jpg?s=1024x1024&w=is&k=20&c=uS39bIN2tqphjXBUW4dbdLND7q9fFxQqK6X_GWrlPYI="
              alt="Feature 2"
            />
            <h2>mobile notifications</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea fuga
              amet laboriosam.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3578/3578796.png"
              alt="Feature 3"
            />
            <h2>mobile notifications</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores fugiat in ipsum iltus consequatur!
            </p>
          </div>
          <div className="feature">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3578/3578796.png"
              alt="Feature 4"
            />
            <h2>mobile notifications</h2>
            <p>
              Lorem ipsum dolor recusandae ipsa pariatur eius provident. V
              reiciendis voluptate?
            </p>
          </div>
          <div className="feature">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3578/3578796.png"
              alt="Feature 4"
            />
            <h2>mobile notifications</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              dicta autem.
            </p>
          </div>
        </div>

        <div className="vishal1">
          <h1>Laboris et officia</h1>
          <p>Super easy to setup mobile app!</p>

          <section className="vishal2">
            <div className="vishal2-card">
              <div className="vishal2-icon">
                <div className="bg1"></div>
                <img
                  src="https://cdn.wallpapersafari.com/70/34/IYrN0o.jpg"
                  alt=""
                />
              </div>
              <h3>Laboris et</h3>
              <p>
                Setta officia aut labore pro vestri liberi mensili, weekly, et
                ulteri
              </p>
            </div>
            <div className="vishal2-card">
              <div className="vishal2-icon">
                <div className="bg1"></div>
                <img src="https://wallpapercave.com/wp/wp10238284.jpg" alt="" />
              </div>
              <h3>Laboris et officia</h3>
              <p>
                Setta officia aut labore pro vestri liberi mensili, weekly, et
                ulteri
              </p>
            </div>
            <div className="vishal2-card">
              <div className="vishal2-icon">
                <div className="bg1"></div>
                <img
                  src="https://i.pinimg.com/originals/89/37/02/893702884d250463f97693edb3049a40.jpg"
                  alt=""
                />
              </div>
              <h3>Laboris et</h3>
              <p>
                Setta officia aut labore pro vestri liberi mensili, weekly, et
                ulteri
              </p>
            </div>
          </section>
        </div>

        <section className="testimonials">
          <h2>Vide et controla tua liberos</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <h4>Esther Howard</h4>
              <p>
                Setta officia aut labore pro vestri liberi mensili, weekly, et
                ulteri
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <h4>Kimberley</h4>
              <p>
                Setta officia aut labore pro vestri liberi mensili, weekly, et
                ulteri
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <h4>Daniel</h4>
              <p>
                Setta officia aut labore pro vestri liberi mensili, weekly, et
                ulteri
              </p>
            </div>
          </div>
        </section>

        <div className="vishal4">
          <section className="vishal5">
            <h1>Laboris et officia</h1>
            <div className="image-container">
              <div className="box1"></div>
              <div className="box2"></div> 
              <div className="box3"></div>
              <div className="box4"></div>
              {/* <img src={"/src/assets/color.png"} alt="" /> */}
            </div>
          </section>

          <footer className="footer">
            <div className="footer-container">
              {/* Left Section */}
              <div className="footer-logo">
                <div className="logo-placeholder">
                  <img
                    src="https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png"
                    alt=""
                  />
                </div>
                <h3>Setta officia aut labore pro vestri liberi mensili</h3>
              </div>

              {/* Middle Section with Links */}
              <div className="footer-links">
                <div className="footer-column">
                  <h4>Benefits</h4>
                  <ul>
                    <li>Lorem & Ipsum</li>
                    <li>Lorem & Ipsum</li>
                    <li>Lorem & Ipsum</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h4>Blogs</h4>
                  <ul>
                    <li>Lorem & Ipsum</li>
                    <li>Lorem & Ipsum</li>
                    <li>Lorem & Ipsum</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h4>For US</h4>
                  <ul>
                    <li>Lorem & Ipsum</li>
                    <li>Lorem & Ipsum</li>
                    <li>Lorem & Ipsum</li>
                  </ul>
                </div>
              </div>

              {/* Right Section with Social Icons */}
              <div className="footer-social">
                <h4>Follow us</h4>
                <div className="social-icons">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
              <p>
                All rights reserved. Setta officia aut labore pro vestri liberi
                mensili
              </p>
              <p>
                <a href="#terms">Terms of Service</a> |{" "}
                <a href="#privacy">Privacy Policy</a>
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Header;
