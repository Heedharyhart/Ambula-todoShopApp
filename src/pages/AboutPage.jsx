import Card from "../components/Card";
import Header from "../components/Header";
import {Link} from 'react-router-dom';

const AboutPage = () => {
  return (
      <div> 
        <Header/>
        <Card>
            <h3 className="head">About The Review Application</h3>
              <p>This is an application for a customer to give a review for a product usage or for a service.</p>
                <br />
                  <p>Version: 1.0.0</p>
                <br />
             <p>
                <Link to='/'>Go Back Home</Link>
              </p>
          </Card>
      </div>
  )
}

export default AboutPage;
