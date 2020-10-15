import React from 'react';
import { Container, Button } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Tdsvideomodal from './Tdsvideomodal';
import {Row, Col } from 'reactstrap';
import Icofont from 'react-icofont';
import './Tdsbanner.css';
class Tdsbanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: {
                0: {
                    nav: false,
                    dots: true,
                },
                767: {
                    nav: true
                },

            },
        }

    }

    render() {
        return (

            <section className="banner">

                <OwlCarousel
                    className="banner-owl owl-theme"
                    loop={true}
                    margin={0}
                    autoplay={true}
                    autoplayTimeout={10000}
                    smartSpeed={500}
                    nav={true}
                    items="1"
                    responsive={this.state.responsive}
                    dots={false} >
                    <div className="item">
                        <div className="banner-one banner-img">
                            <Container>
                                <div className="banner-text text-center">
                                    <h1 > <span>الإعلام الاقتصادي</span> </h1>
                                    <p>الإعلام بصفة عامة له دور أساسي وفعال في المجتمعات بما يضمن لها النجاح والتقدم وكذلك تحريك السوق المحلي ليصبح عالمي ومن خلال التسليط على الأنشطة الاقتصادية وفرصة ليجذب العديد من الاستثمارات الخارجية وهناك رابط كبير بين الإعلام والاقتصاد لدرجة واضحة يفهمها الجميع فهو جزء أصيل من صناعة الإعلام </p>
                                   

                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="item">
                        <div className="banner-two banner-img">
                        <Container>
                            
                                    <Row>
                                        <Col >
                                            <div className="white-bg coman-box ourservice-box">
                                            <Icofont icon="icofont-not-allowed" />
                                            <h4> يدلس الحقائق ويغير المفاهيم </h4>
                                            
                                            </div>
                                        </Col>
                                        <Col >
                                            <div className="white-bg coman-box ourservice-box">
                                            <Icofont icon="icofont-crown" />
                                            <h4>  منطقي واضح وصادق </h4>
                                            </div>
                                        </Col>
                                    </Row>
                            </Container>
                            <Container>
                                <div className="banner-text text-center">
                                    <h1 >  <span>أنواع الإعلام الاقتصادي</span>  </h1>
                                    <h4 style={{color:'white'}}>شاهد مقابلة د.محمد فراس النائب حول تأثير الإعلام على الاقتصاد </h4>
                                    <div className="d-flex justify-content-center">
                                        <Tdsvideomodal></Tdsvideomodal>
                                    </div>
                                </div>
                            </Container>
                            
                        </div>
                        
                    </div>
                </OwlCarousel>
            </section>
        );
    }
}


export default Tdsbanner;
