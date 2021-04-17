import React from 'react';
// import Review from '../../Client/Review/Review';
import Commitments from '../Commitments/Commitments';
import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import MeetOurGuides from '../MeetOurGuides/MeetOurGuides';
import Packages from '../Packages/Packages';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
          <HeaderMain></HeaderMain>
          <Commitments></Commitments>
          <Packages></Packages>
          <Services></Services>
          <Testimonials></Testimonials>
          <MeetOurGuides></MeetOurGuides>
          <Footer></Footer>
        </div>
    );
};

export default Home;