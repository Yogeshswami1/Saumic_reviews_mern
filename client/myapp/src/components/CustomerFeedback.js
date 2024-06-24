import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackSection = styled.section`
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FeedbackSlide = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 10px; /* Add margins here */

  &:hover {
    transform: scale(1.05); /* Scale up on hover */
    transition: transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  }
`;

const FeedbackImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const CustomerFeedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, // Add autoplay
    autoplaySpeed: 2000, // Adjust autoplay speed (optional)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <FeedbackSection>
      <Heading>Customer Feedback</Heading>
      <Slider {...settings}>
        <FeedbackSlide>
          <FeedbackImage src="https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg" alt="Customer Feedback Image 1" />
        </FeedbackSlide>
        <FeedbackSlide>
          <FeedbackImage src="https://saumiccraft.com/wp-content/uploads/2023/07/wp4-461x1024.jpg" alt="Customer Feedback Image 2" />
        </FeedbackSlide>
        <FeedbackSlide>
          <FeedbackImage src="https://saumiccraft.com/wp-content/uploads/2023/07/wp4-461x1024.jpg" alt="Customer Feedback Image 3" />
        </FeedbackSlide>
        <FeedbackSlide>
          <FeedbackImage src="https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg" alt="Customer Feedback Image 4" />
        </FeedbackSlide>
        <FeedbackSlide>
          <FeedbackImage src="https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg" alt="Customer Feedback Image 5" />
        </FeedbackSlide>
        <FeedbackSlide>
          <FeedbackImage src="https://saumiccraft.com/wp-content/uploads/2023/07/wp2-461x1024.jpg" alt="Customer Feedback Image 6" />
        </FeedbackSlide>
        <FeedbackSlide>
          <FeedbackImage src="https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg" alt="Customer Feedback Image 7" />
        </FeedbackSlide>
        <FeedbackSlide>
          <FeedbackImage src="https://saumiccraft.com/wp-content/uploads/2023/07/wp3-461x1024.jpg" alt="Customer Feedback Image 8" />
        </FeedbackSlide>
        <FeedbackSlide>
          <FeedbackImage src="https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg" alt="Customer Feedback Image 9" />
        </FeedbackSlide>
        <FeedbackSlide>
          <FeedbackImage src="https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg" alt="Customer Feedback Image 10" />
        </FeedbackSlide>
        <FeedbackSlide>
          <FeedbackImage src="https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg" alt="Customer Feedback Image 11" />
        </FeedbackSlide>
      </Slider>
    </FeedbackSection>
  );
}

export default CustomerFeedback;





// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const CustomerFeedback = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "20px", // Adjust this to increase or decrease the space between images
//     responsive: [
//       {
//         breakpoint: 768, // Adjust this value to target mobile devices
//         settings: {
//           slidesToShow: 1, // Show only one slide on screens smaller than the breakpoint
//           slidesToScroll: 1,
//           centerMode: false, // Disable center mode on mobile for better appearance
//         }
//       }
//     ]
//   };

//   const feedbacks = [
//     "https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg",
//     "https://saumiccraft.com/wp-content/uploads/2023/07/wp4-461x1024.jpg",
//     "https://saumiccraft.com/wp-content/uploads/2023/07/wp4-461x1024.jpg",
//     "https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg",
//     "https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg",
//     "https://saumiccraft.com/wp-content/uploads/2023/07/wp2-461x1024.jpg",
//     "https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg",
//     "https://saumiccraft.com/wp-content/uploads/2023/07/wp3-461x1024.jpg",
//     "https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg",
//     "https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg",
//     "https://saumiccraft.com/wp-content/uploads/2023/07/wp1-461x1024.jpg"
//   ];

//   const slideStyle = {
//     padding: '0 10px', // Add padding to create space between slides
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   };

//   const imageStyle = {
//     maxWidth: '22rem', // Set max width to reduce image size
//     height: 'auto', // Maintain aspect ratio
//     borderRadius: '10px',
//   };

//   return (
//     <section className="customer-feedback" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
//       <h1>Customer Feedback</h1>
//       <Slider {...settings}>
//         {feedbacks.map((src, index) => (
//           <div key={index} className="feedback-slide" style={slideStyle}>
//             <img src={src} alt={`Customer Feedback ${index + 1}`} style={imageStyle} />
//             {/* <p>Customer feedback text goes here.</p> */}
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }

// export default CustomerFeedback;
