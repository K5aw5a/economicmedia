import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import './Tdsfooter.css';


class Tdsfooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <footer>
                <Container>
                    <Row className="align-items-center">
                        <Col md="6">
                            <p>Copyright @ 2020 Economic Media. All rights reserved</p>
                        </Col>
                        
                    </Row>
                </Container>

            </footer>
        );

    }


}

export default Tdsfooter;
