// // src/ReviewPage.js

// import React from 'react';
// import styled from 'styled-components';

// const ReviewContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
//   background-color: #f4f4f4;
// `;

// const ReviewGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 1.5rem;
//   width: 100%;
//   max-width: 1200px;
// `;

// const ReviewCard = styled.div`
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
// `;

// const VideoWrapper = styled.div`
//   position: relative;
//   padding-bottom: 56.25%; /* 16:9 */
//   height: 0;
//   iframe {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
// `;

// const Description = styled.div`
//   padding: 1rem;
//   font-size: 1rem;
//   color: #333;
// `;

// const reviews = [
//   {
//     id: 1,
//     videoUrl: 'https://www.youtube.com/embed/nltw-wmbtB0',
//     description: 'The first customer review offers valuable insight into the user experience and overall satisfaction with our product. This feedback highlights how well our product meets customer needs, showcasing its benefits and performance. Understanding our customers perspectives helps us continue to improve and deliver exceptional quality.',
    
//   },
//   {
//     id: 2,
//     videoUrl: 'https://www.youtube.com/embed/GpxTmi6IH9U',
//     description: 'Join us at Saumic Craft as we revisit the electrifying energy and fruitful collaborations from our recent offline meeting! 🌟 Hear firsthand from our valued customers about their experiences and the positive impact of our gathering. From innovative ideas to strengthened partnerships, witness how our event sparked creativity and fueled growth.',
//   },
//   {
//     id: 3,
//     videoUrl: 'https://www.youtube.com/embed/5luqoESejxY',
//     description: 'Join us as we relive the electrifying energy and fruitful collaborations from our recent offline meeting! 🌟 Dive into the excitement and hear firsthand from our valued customers about their experiences and the positive impact of our gathering. From innovative ideas to strengthened partnerships, witness how our event sparked creativity and fueled growth.',  },
//   {
//     id: 4,
//     videoUrl: 'https://www.youtube.com/embed/3ptqAMQrn0w',
//     description: 'Embark on an inspiring journey with us as we delve into the success story of one of our esteemed Saumic Craft resellers! In this captivating review and testimonial, witness firsthand how our innovative model has enabled individuals to thrive in the dynamic world of ecommerce. From the initial spark of interest to the flourishing camaraderie within our community, experience the transformative impact of Saumic Craft. ',
//   },
//   {
//     id: 5,
//     videoUrl: 'https://www.youtube.com/embed/BXaJ7MxZ4pA',
//     description: `Witness our client's incredible success story: securing a staggering Rs 2000 margin on a single piece order for the USA! 🇺🇸 Discover how you can replicate this achievement without the need for stock management or warehouses. Our products offer massive margins, whether you're selling nationally or internationally.`,
//   },
//   {
//     id: 6,
//     videoUrl: 'https://www.youtube.com/embed/NcL9jxGORV0',
//     description: `In today's video, I'll be sharing a unique business idea that requires no investment in buying products or spending money. You can start this business from your village or even from your own home.

// We'll delve into various handmade craft business ideas, providing you with names and tips to kickstart your entrepreneurial journey. These ideas are perfect for students or anyone seeking profitable ventures without hefty investments.`







//   },
// ];

// // https://youtu.be/NcL9jxGORV0?si=lGbgnN67nedLVTGT

// const ReviewPage = () => {
//   return (
//     <>
//     <h1>Customer Reviews Feedback</h1>
//     <ReviewContainer>
//       <ReviewGrid>
//         {reviews.map((review) => (
//           <ReviewCard key={review.id}>
//             <VideoWrapper>
//               <iframe
//                 width="560"
//                 height="315"
//                 src={review.videoUrl}
//                 title={`Customer Review ${review.id}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </VideoWrapper>
//             <Description>{review.description}</Description>
//           </ReviewCard>
//         ))}
//       </ReviewGrid>
//     </ReviewContainer>
//     </>
//   );
// };

// export default ReviewPage;


// src/ReviewPage.js

// src/ReviewPage.js

// src/ReviewPage.js

import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f4f4f4;
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ReviewCarousel = styled(Carousel)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 100%;

    .carousel .slide {
      background: none;
      padding: 1rem;
    }

    .carousel .control-arrow {
      opacity: 0.8;
    }

    .carousel .control-prev.control-arrow {
      left: 10px;
    }

    .carousel .control-next.control-arrow {
      right: 10px;
    }
  }
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0 auto;
  max-width: 300px;

  @media (min-width: 769px) {
    max-width: none;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Description = styled.div`
  padding: 1rem;
  font-size: 1rem;
  color: #333;
  text-align: center;
`;

const reviews = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/embed/nltw-wmbtB0',
    description: 'The first customer review offers valuable insight into the user experience and overall satisfaction with our product. This feedback highlights how well our product meets customer needs, showcasing its benefits and performance. Understanding our customers perspectives helps us continue to improve and deliver exceptional quality.',
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/embed/GpxTmi6IH9U',
    description: 'Join us at Saumic Craft as we revisit the electrifying energy and fruitful collaborations from our recent offline meeting! 🌟 Hear firsthand from our valued customers about their experiences and the positive impact of our gathering. From innovative ideas to strengthened partnerships, witness how our event sparked creativity and fueled growth.',
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/embed/5luqoESejxY',
    description: 'Join us as we relive the electrifying energy and fruitful collaborations from our recent offline meeting! 🌟 Dive into the excitement and hear firsthand from our valued customers about their experiences and the positive impact of our gathering. From innovative ideas to strengthened partnerships, witness how our event sparked creativity and fueled growth.',
  },
  {
    id: 4,
    videoUrl: 'https://www.youtube.com/embed/3ptqAMQrn0w',
    description: 'Embark on an inspiring journey with us as we delve into the success story of one of our esteemed Saumic Craft resellers! In this captivating review and testimonial, witness firsthand how our innovative model has enabled individuals to thrive in the dynamic world of ecommerce. From the initial spark of interest to the flourishing camaraderie within our community, experience the transformative impact of Saumic Craft.',
  },
  {
    id: 5,
    videoUrl: 'https://www.youtube.com/embed/BXaJ7MxZ4pA',
    description: 'Witness our client\'s incredible success story: securing a staggering Rs 2000 margin on a single piece order for the USA! 🇺🇸 Discover how you can replicate this achievement without the need for stock management or warehouses. Our products offer massive margins, whether you\'re selling nationally or internationally.',
  },
  {
    id: 6,
    videoUrl: 'https://www.youtube.com/embed/NcL9jxGORV0',
    description: 'In today\'s video, I\'ll be sharing a unique business idea that requires no investment in buying products or spending money. You can start this business from your village or even from your own home. We\'ll delve into various handmade craft business ideas, providing you with names and tips to kickstart your entrepreneurial journey. These ideas are perfect for students or anyone seeking profitable ventures without hefty investments.',
  },
];

const ReviewPage = () => {
  return (
    <>
      <h1>Customer Reviews Feedback</h1>
      <ReviewContainer>
        <ReviewGrid>
          {reviews.map((review) => (
            <ReviewCard key={review.id}>
              <VideoWrapper>
                <iframe
                  width="560"
                  height="315"
                  src={review.videoUrl}
                  title={`Customer Review ${review.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoWrapper>
              <Description>{review.description}</Description>
            </ReviewCard>
          ))}
        </ReviewGrid>
        <ReviewCarousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id}>
              <VideoWrapper>
                <iframe
                  width="560"
                  height="315"
                  src={review.videoUrl}
                  title={`Customer Review ${review.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoWrapper>
              <Description>{review.description}</Description>
            </ReviewCard>
          ))}
        </ReviewCarousel>
      </ReviewContainer>
    </>
  );
};

export default ReviewPage;
