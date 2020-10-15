
import React from 'react';
import {

    Row, Col, Progress
} from 'reactstrap';
import Icofont from 'react-icofont';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Tdsaboutslider.css';

class Tdsaboutslider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={false}
                items="1"
                dots={true}
                lazyLoad={true}

            >


                <div className="item">
                    <div className="title-box mb-0 text-left">
                        <h2 className=" text-right mb-0">  <b>وظائف الإعلام الاقتصادي</b></h2>
                    </div>
                    <Row className="mt-4" >
                        <Col className="text-right"><h6 className="mb-0">تحسس وقوع الأزمات الاقتصادية </h6></Col>
                    
                    </Row>
                    <Progress value="100" animated color="#383737" className="mb-3" />
                    <Row>
                        <Col className="text-right"><h6 className="mb-0">التوعية المجتمعية بأهمية الادخار وأليات التوجيه نحو الاستثمار الجيد والمبدع الذي يعتمد على المرونة في العمل به</h6></Col>
                    
                    </Row>
                    <Progress value='100' animated color="#383737" className="mb-3" />
                    <Row>
                        <Col className="text-right"><h6 className="mb-0">البحث في الأسواق العالمية المختلفة والبورصات ومتابعتها </h6></Col>
                    
                    </Row>
                    <Progress value='100' animated color="#383737" className="mb-3" />
                    <Row>
                        <Col className="text-right"><h6 className="mb-0">دعم المشاريع والصناعات المفيدة بالترويج لها </h6></Col>
                    </Row>
                    <Progress value="100" animated color="#383737" />

                </div>


                <div className="item">
                    <div className="title-box text-left mb-0">
                        <h2 className="text-right mb-0"> <b>الرابطة بين الإعلام والاقتصاد</b></h2>
                        
                    </div>
                    <p className='text-right'>يلعب الإعلام المرئي والمسموع والمقروء دورا رئيسيا في تكوين أفكار الشعوب والسلوكيات، وقد يكون أحد العوامل المؤثرة في الاقتصاد أيضا فيشكل نقطة انطلاق مهمة، فلا توجد أي دولة إلا ولها إعلام جيد ينمي الحياة بها في عصر الاقتصاديات الكبير، وهي متلازمة الاتصالات والمعلومات التي تنتقل بشكل سهل للغاية من خلال ما يتم طرحه من بنية تحتية ومشاريع تزيد من نمو الدول. </p>
                    <p className='text-right'>يشكل الإعلام حلقة وصل بين الحالة الاقتصادية و الأفراد والمؤسسات وحتى الحكومات وبالتالي له تأثير كبير في عالم الاقتصاد، فمن الطبيعي أن يكون هناك اعتماد ما بينهم، فأحد المتطلبات من المؤسسات الاقتصادية أن يكون لديها صورة ترسخ في أذهان الجمهور المتلقي فهي تعتبر أساسية في النجاح، فكيف تستطيع تلك الشركات أن تحصل على تلك الصورة بدون إعلام، فلذلك تقوم بالاستثمار في ذلك المجال ولا ننسى أن هناك عوامل نجاح تقليدية لن تكون قوية ما لم يبرزها الاعلام </p>
                
                </div>

                <div className="item">
                    <div className="title-box text-left mb-0">
                        <h2 className="text-right mb-0"> <b>الإعلام والتنمية الاقتصادية</b></h2>
                        
                    </div>
                    <p className='text-right'>فلعل اختيار الوسيلة الدعائية الجيدة التي تهم الاقتصاد للشركات الكبيرة أمر ملح للغاية وعلى حسب نوع الاقتصاد السائد في الدولة مثل الصحف والمجلات وغيرها كلها ترمي إلى الرقي الاقتصادي </p>
                    <p className='text-right'>ولعل الأخذ في الحسبان بأن الأمور تسير بطريقة تدعم الرخاء الاقتصادي من خلال ضرب أمثلة حية للغاية لذلك الأمر، فالمعلم والطبيب والمهندس وغيره ممن يتابع الأخبار المختلفة والتي تهم العنصر الاقتصادي بصورة أكثر تواؤما بحيث التأثير الذي يتم عليه وينعكس على مدى رقيه في عمله بشكل أوسع واستثمار لاقته ما دام الدافع هنا مثير له </p>
                
                </div>

               
                   
                

            </OwlCarousel>

        );

    }



}

export default Tdsaboutslider;