/**
 * Entry application component used to compose providers and render Routes.
 * */
import React from 'react';
import {
  Button, Container, Row, Col, Media, Card, CardImg, CardText,
  CardTitle, ListGroup, ListGroupItem
} from 'reactstrap';
// Web Icon fonts
import Icofont from 'react-icofont';
// Web theme color root css
import './components/colors.css';
import Tdsheader from './components/Tdsheader';
import Tdsbanner from './components/Tdsbanner';
import Tdsaboutslider from './components/Tdsaboutslider';
import Tdsfooter from './components/Tdsfooter';
import './App.css';
import './responsive.css';
class App extends React.Component{

    render() {
        return (
        <div className="App" >
            {/* Navbar  */}
            <Tdsheader   />
            
            {/* Hero Section Start */}
            <div id="home" className="section">
            <Tdsbanner />
            </div>
            {/*  Section devider in yellow*/}
            <div className=" subscribe-box grapping">
            </div>
            {/* economic media ways Section Start */}
            <div className="section expert-team grapping" id="team">
            <Container>
                <div className="title-box">
                <h2> <b>أساليب الإعلام الاقتصادي</b></h2>
                </div>
                <Row>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/journalisim.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white">الصحافة</h4>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" >  <Icofont icon="icofont-livejournal" /></ListGroupItem>
                        <ListGroupItem tag="a" >  <Icofont icon="icofont-camera" /></ListGroupItem>
                    </ListGroup>
                    </div>
    
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/tvandradio.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white">الراديو والتلفاز</h4>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" >  <Icofont icon="icofont-radio-mic" /></ListGroupItem>
                        <ListGroupItem tag="a" >  <Icofont icon="icofont-computer" /></ListGroupItem>
                    </ListGroup>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/internet.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white">الشبكة العنكبوتية</h4>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" >  <Icofont icon="icofont-at" /></ListGroupItem>
                        <ListGroupItem tag="a" >  <Icofont icon="icofont-news" /></ListGroupItem>
    
                    </ListGroup>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/workshops.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white"> الندوات وورش العمل </h4>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" >  <Icofont icon="icofont-brainstorming" /></ListGroupItem>
                        <ListGroupItem tag="a" >  <Icofont icon="icofont-ui-user-group" /></ListGroupItem>
                       
                    </ListGroup>
                    </div>
                </Col>
                </Row>
            </Container>
            </div>
            {/* about economic media Section Start */}
            <div className="section about-box grapping" id="about">
            <Container>
                <Row>
                <Col xs="12" sm="12" md="12" lg="6">
                    <div className="about-img">
                    
                    <img src={require("./images/economicmedia.jpg")} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col xs="12" sm="12" md="12" lg="6">
                    <Tdsaboutslider />
    
                </Col>
                </Row>
            </Container>
            </div>
           
            {/* suggestions Section Start*/}
            <div className="marketing-section grapping" >
            <Container>
    
                <Row className="align-items-center">
                <Col xs="12" sm="12" md="12" lg="6">
                    
                    <div className="marketing-img">
                    <img src={require("./images/recommend11.jpg")} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col xs="12" sm="12" md="12" lg="6">
                <h2 className="text-right mb-0" style={{color:'white',paddingBottom:'20px'}}> <b>مقترحات وتوصيات للأداء الإعلامي </b></h2>
                    <Media className="markrt-box">
    
                   
                    <Media body>
                        <Media heading style={{textAlign:'right',paddingRight:'20px'}}>
                        جذب المتلقي للرسالة الإعلامية إلى الخبر بشكل تفاعلي معه يجعله أكثر اهتماما بالحالة الاقتصادية التي تقدم 
                        </Media>
                    </Media>
                    <Media left href="#">
                        <Icofont icon="icofont-focus" />
                    </Media>
                    </Media>
                    <Media className="markrt-box">
                   
                    <Media body>
                        <Media heading style={{textAlign:'right',paddingRight:'20px'}}>
                        تقديم دورات تفصيلية للإعلاميين الاقتصاديين لضمان الرقي في المادة الإعلامية الدسمة التي تزيد من فرص الاستثمار 
                        </Media>
                    </Media>
                    <Media left href="#">
                        <Icofont icon="icofont-ui-user-group" />
                    </Media>
                    </Media>
                    <Media className="markrt-box">
                   
                    <Media body>
                        <Media heading style={{textAlign:'right',paddingRight:'20px'}}>
                        معرفة كل ما يدور في عقول الأفراد من خلال ما يشبع رغباتهم الاقتصادية وتنميتها بشكل جيد ومفصل وسهل 
                        </Media>
                    </Media>
                    <Media left href="#">
                        <Icofont icon="icofont-brain-alt" />
                    </Media>
                    </Media>
                    <Media className="markrt-box">
                   
                    <Media body>
                        <Media heading style={{textAlign:'right',paddingRight:'20px'}}>
                        نشر ثقافة الاقتصاد على المواطن العادي إلى المواطن المسؤول وتجنب الألفاظ القوية في الحديث عن الحالة الاقتصادية
                        </Media>
                    </Media>
                    <Media left href="#"  >
                        <Icofont icon="icofont-read-book-alt" />
                    </Media>
                    </Media>
    
                </Col>
                </Row>
            </Container>
            </div>
            {/* Expert Feadback Section Start 
            <div className="expertfeesback grapping" >
            <Container>
                <div className="title-box">
                <h2>Expert <b>Feadback</b></h2>
                <p>Extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain</p>
                </div>
                <Tdsfeedbackslider></Tdsfeedbackslider>
            </Container>
            </div>*/}
            {/*Our Latest News  Section Start*/}
            <div className="section latestnews grapping" id="blog">
            <Container>
                <div className="title-box">
                <h2>  <b>آخر الأخبار</b></h2>
                </div>
                <Row>
                <Col xs="12" sm="12" md="4">
                    <Card>
                    <CardImg top width="100%" src={require("./images/news.jpeg")} alt="Card image cap" />
                    <Card body style={{textAlign:'right'}}>
                        <CardTitle> ينظم ورشة عمل حول الإعلام الاقتصادي </CardTitle>
                        <CardText>دبي في 21 أكتوبر/ وام / نظم نادي دبي للصحافة بدعم من موانئ دبي العالمية جلسة تفاعلية</CardText>
                        <Button color="primary" href="http://wam.ae/ar/details/1395302715260">إقرأ المزيد</Button>
                    </Card>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4">
                    <Card>
                    <CardImg top width="100%" src={require("./images/news1.png")} alt="Card image cap" />
                    <Card body style={{textAlign:'right'}}>
                        <CardTitle> المجلة التدريبية للإعلام الاقتصادي - العدد 0</CardTitle>
                        <CardText>مجلة من إعداد طلبة المساق : الكتابة للعلاقات العامة بإشراف د.رانيا الخير أحمد</CardText>
                        <Button color="primary" href="https://drive.google.com/file/d/1Ox4m5nq9rb5fmAFT4t4WgRHt8YPrK8Dw/view?usp=sharing">إقرأ المزيد</Button>
                    </Card>
                    </Card>
                </Col>
                </Row>
            </Container>
            </div>
            {/*  Section devider in yellow*/}
            <div className=" subscribe-box grapping">
            </div>

            {/* Contact Us Section Start  */}
            <div className="section contactus grapping" id="contact">
            <Container>
                <div className="title-box">
                <h2>   <b>للتواصل معنا</b></h2>
                <h3>   <b>مدرس المساق - د.رانيا الخير أحمد</b></h3>
                <p>موقع المشروع التجريبي - مساق الكتابة للعلاقات العامة 2020</p>
                </div>
                <Row>
                <Col xs="12" md="12" lg="4">
                    <Media className="address-box">
                    <Media left  >
                        <Icofont icon="icofont-user-female" />
                    </Media>
                    <Media body>
                        <Media heading>
                        K-217610213
                        </Media>
                       <p> عايشة الشامسي </p>
                    </Media>
                    </Media>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <Media className="address-box">
                    <Media left  >
                        <Icofont icon="icofont-user-female" />
                    </Media>
                    <Media body>
                        <Media heading>
                        K-217610214
                        </Media>
                       <p> مريم الشامسي </p>
                    </Media>
                    </Media>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <Media className="address-box">
                    <Media left  >
                        <Icofont icon="icofont-user-female" />
                    </Media>
                    <Media body>
                        <Media heading>
                        K-91320243
                        </Media>
                       <p> نور غسان </p>
                    </Media>
                    </Media>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <Media className="address-box">
                    <Media left >
                        <Icofont icon="icofont-user-male" />
                    </Media>
                    <Media body>
                        <Media heading>
                        K-917660213
                        </Media>
                       <p> محمد الظاهري </p>
                    </Media>
                    </Media>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <Media className="address-box">
                    <Media left  >
                        <Icofont icon="icofont-user-male" />
                    </Media>
                    <Media body>
                        <Media heading>
                        K-219610888
                        </Media>
                       <p> ناصر البلوشي </p>
                    </Media>
                    </Media>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <Media className="address-box">
                    <Media left >
                        <Icofont icon="icofont-user-male" />
                    </Media>
                    <Media body>
                        <Media heading>
                        K-218770209
                        </Media>
                       <p> حمد الحوسني </p>
                    </Media>
                    </Media>
                </Col>
                </Row>
    
    
            </Container>
            </div>
            {/* Footer  Section Start */}
            <div className=""> 
                <Tdsfooter></Tdsfooter>
            </div>
        </div>
        );
    }
  }
  
  export default App;
  