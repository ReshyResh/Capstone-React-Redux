import { Button, Modal } from "react-bootstrap";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa"

function ModalBS (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Crypto Tracker - By Reshy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Capstone project for the React / Redux module at <a href="http://www.microverse.org">Microverse</a>.<br />
          The web app retrieves data from the Binance API, displaying coins and informations about them.<br />
          Users can sort the data received to display only the most volatile coins.<br />
          When a coin is clicked, the details page appears with more informations as well as a section with a graph of the coin's price in the past few minutes.<br /><br />

        </p>
        <Button style={{marginRight: '20px'}} href="https://github.com/ReshyResh/Capstone-React-Redux" variant="dark"><FiGithub /> - Source code</Button>
        <Button href="https://www.linkedin.com/in/reshyresh" variant="info"><FaLinkedin />Connect with me</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{background: '#5b0e27', border: 'none'}} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalBS;
