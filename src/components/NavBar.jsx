import React from 'react';

import Form from 'react-bootstrap/Form';

import Nav from 'react-bootstrap/Nav';

import { Navbar,Nav } from 'react-bootstrap';

 



function NavScrollExample() {

  return (

    <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">

      <container div className="container-fluid">

        <a herf="#" className="navbar-brand mb-0 h1">

          <img className="d-inline-block align-top" src="https://www.canva.com/design/DAF-lVzL3H0/3gRIct7X3ylcTF1j2ar3QA/
       view?utm_content=DAF-lVzL3H0&utm_campaign=
      designshare&utm_medium=link&utm_source=editor"  alt={"flavourFinder"}
            width="40" height="40" />
        
        </a>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">

          <Nav

            className="me-auto my-2 my-lg-0"

            style={{ maxHeight: '100px' }}

            navbarScroll

          >

            <Nav.Link href="#action1">Home</Nav.Link>

            <Nav.Link href="#action2">Reviews</Nav.Link>




          </Nav>

          <Form className="d-flex">

            <Form.Control

              type="search"

              placeholder="Search"

              className="me-2"

              aria-label="Search"

            />
          </Form>

        </Navbar.Collapse>

      </container>

    </Navbar>

  );

}




export default NavScrollExample;




// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-light">
//       <div className="container-fluid">
//       <a herf="#" className="navbar-brand mb-0 h1">
//        <img className="d-inline-block align-top" src="https://www.canva.com/design/DAF-lVzL3H0/3gRIct7X3ylcTF1j2ar3QA/
// //       view?utm_content=DAF-lVzL3H0&utm_campaign=
// //       designshare&utm_medium=link&utm_source=editor"  alt="flavourFinder"
//         width="40" height="40" />
//       Flavourfinder
//     </a>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <flavourFinder
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '200px' }}
//             navbarScroll
//           >
//             <Flavourfinder.Link href="#action1">Home</Flavourfinder.Link>
//             <Flavourfinder.Link href="#action2">Reviews</Flavourfinder.Link>

//           </flavourFinder>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />

//           </Form>
//         </Navbar.Collapse>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;