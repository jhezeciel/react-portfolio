import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import pfp1 from './dfh.jpg'; 
import pfp2 from './imm.jpg'; 
import pfp3 from './mr.jpg'; 

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [bgColor, setBgColor] = useState('#111111'); 

  const handleShow = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <section id="portfolio" className="mt-8" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <h2 className="text-center">Welcome to my projects</h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={pfp1} className="card-img-top" alt="Deadline Funeral Home" />
              <div className="card-body">
                <h5
                  
                  className="card-title project-title"
                  onClick={() => changeBackgroundColor('#d1871f')}
                  style={{ color: 'orange' }}
                  >
                  DEADLINE FUNERAL HOME
                </h5>
                <p className="card-text">
                  This project, titled "Deadline Funeral Home," was developed during my freshman year as part of a web development course.
                </p>
                <Button variant="primary" 
                  style={{ backgroundColor: 'darkorange', borderColor: 'orange' }}  // Add this style
                  onClick={() => handleShow({
                  title: 'Deadline Funeral Home Details',
                  body: 'The objective was to conceptualize and design a fully functional business website from scratch. The project required me to apply basic skills in HTML, CSS to create a professional and user-friendly site. The website I created serves as an online presence for a fictional funeral home, complete with detailed service listings, contact information, and an intuitive navigation system. This project not only strengthened my understanding of web design principles but also introduced me to the challenges of developing a website tailored to a specific business need.'})}>
                  Read More
                </Button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={pfp3} className="card-img-top" alt="Madonna Resort" />
              <div className="card-body">
                <h5
                  className="card-title project-title"
                  onClick={() => changeBackgroundColor('#fbe4bb')}
                  style={{ color: 'orange' }}
                >
                  MADONNA RESORT
                </h5>
                <p className="card-text">
                  A group project in "INFOMAN" course that showcases the resort’s amenities, accommodations, and services.
                </p>
                <Button variant="primary" 
                  style={{ backgroundColor: 'darkorange', borderColor: 'orange' }}
                  onClick={() => handleShow({
                  title: 'Madonna Resort Details',
                  body: 'Our team worked together to build a visually appealing site with a strong focus on user experience. In addition to its design elements, the project also involved the integration of a robust database system using SQL. This allowed us to manage and dynamically display the information of the resort, such as amenities, accommodations, and services.'})}>
                  Read More
                </Button>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={pfp2} className="card-img-top" alt="Immediaid" />
              <div className="card-body">
                <h5
                  className="card-title project-title"
                  onClick={() => changeBackgroundColor('#d3d3d3')}
                  style={{ color: 'orange' }}
                >
                  IMMEDIAID
                </h5>
                <p className="card-text">
                  A group initiative focused on developing an online application for disaster risk management and volunteer coordination.
                </p>
                <Button variant="primary"
                  style={{ backgroundColor: 'darkorange', borderColor: 'orange' }} 
                  onClick={() => handleShow({
                  title: 'ImmediAid Details',
                  body: 'The "ImmediAid" project was a group initiative focused on developing an online application for disaster risk management and volunteer coordination. The app is designed to provide real-time updates and resources for disaster response, helping to connect volunteers with those in need during emergencies. Our team utilized Figma in the early stages of the project to collaboratively design the user interface of the app. This design phase was crucial in creating a user-friendly and accessible platform that effectively supports disaster risk management efforts.'})}>
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>        
        <Modal.Body>{modalContent.body}</Modal.Body> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Portfolio;
