import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const AppNavbar = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='brand-logo'><img src="https://static.tildacdn.com/tild3462-3232-4639-b836-386339323939/logo_1.svg" alt="" /> </Navbar.Brand>
          <Nav className="me-auto align-items-center">
            <div className="navbar-text-block">
                <span className="text-light">Дизайнерский ремонт</span>
                <span className="text-light">в Москве под ключ!</span>
            </div>
            <div className="rating-container">
            <img src="https://static.tildacdn.com/tild3634-6564-4333-b235-346232346337/Group_1_1.svg" alt="Rating" className="rating-image" />
            <div className="rating-text">4.9</div>
            </div>
           
            <div className='text1'>
            <div className="stars">
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
           
            </div>
            <span> Рейтинг на основе<br/>
              350+ ремонтов</span>

            </div>
           
          </Nav>
          <Navbar.Collapse id="">
            <Nav className="text2">
              <Nav.Link href="#Ремонт">Ремонт</Nav.Link>
              <Nav.Link href="#Дизайн">Дизайн</Nav.Link>
              <Nav.Link href="#Калкнлятор">Калкнлятор</Nav.Link>  
              <Nav.Link href="#Калкнлятор">+7(495)308-47-67 </Nav.Link>    
              </Nav>
                <Nav.Link href="https://wa.me/yourphonenumber" target="_blank" className="nav-icon">
                <img class="tn-atom__img t-img loaded" width={50} height={50} alt="" src="https://static.tildacdn.com/tild3438-3434-4663-a139-636164666364/Frame.svg"/>
                </Nav.Link>
                <Nav.Link href="https://t.me/yourusername" target="_blank" className="nav-icon">
                <img class="tn-atom__img t-img loaded"   width={50} height={50} alt="" src="https://static.tildacdn.com/tild3632-6236-4337-b537-643738303538/whats-up.svg"/>
                </Nav.Link>
                <Button variant="outline-success" className='custom-but'>Заказать звонок</Button>
          </Navbar.Collapse>
         
        </Container>
      </Navbar>
    );
  };
  
  export default AppNavbar;