const projects = [
  { 
    "title": "Feature One", 
    "description": "This is a placeholder description for Feature One, showcasing a key aspect of the system.",
    "image": "/assets/choose3.webp" 
  },
  { 
    "title": "Feature Two", 
    "description": "A brief description for Feature Two, emphasizing its importance in the product.",
    "image": "/assets/choose3.webp" 
  },
  { 
    "title": "Feature Three", 
    "description": "This is a placeholder description for Feature Three, providing insight into its functionality.",
    "image": "/assets/choose3.webp" 
  },
  { 
    "title": "Feature Four", 
    "description": "An example description for Feature Four, highlighting its innovative design.",
    "image": "/assets/choose3.webp" 
  },
  { 
    "title": "Feature Five", 
    "description": "Placeholder content for Feature Five, representing a standout feature.",
    "image": "/assets/choose3.webp" 
  },
  { 
    "title": "Feature Six", 
    "description": "A concise explanation for Feature Six, detailing its core capability.",
    "image": "/assets/choose3.webp" 
  },
  { 
    "title": "Feature Seven", 
    "description": "This dummy content describes Feature Seven, focusing on its practical benefits.",
    "image": "/assets/choose3.webp" 
  },
  { 
    "title": "Feature Eight", 
    "description": "Feature Eight is explained here with placeholder text and an image reference.",
    "image": "/assets/choose3.webp" 
  },
  { 
    "title": "Feature Nine", 
    "description": "An overview of Feature Nine, described using generic placeholder content.",
    "image": "/assets/choose3.webp" 
  },
  { 
    "title": "Feature Ten", 
    "description": "Final feature description as a placeholder for showcasing its application.",
    "image": "/assets/choose3.webp" 
  },
];

import React from 'react';
// import "../style/ex.css"
function Section9() {
  return (
    <div className='sec-9'>
      <section className='sec-9-card-container'>
        <h2>Key Features</h2>
        {projects.map((project, index) => (
          <div 
            className='sec-9-card'
            key={index}
            style={{
              '--card-z-index': index, 
              '--card-stack-index': projects.length - index,
              width: `${50 + (index * 0.5)}vw`
            }}
          >
            <div className='sec-9-card-details'>
              <h4>{String(index + 1).padStart(2, '0')}</h4>
              <h3>{project.title}</h3>
              <img src={project.image} alt={`Feature ${index + 1}`} className='Icon' />
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Section9;


// css for this section

// .sec-9 {
//   position: relative;
//   height: 100%;
// }

// .sec-9-card-container {
//   position: relative;
//   height: auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   margin-bottom: 30%;
// }

// .sec-9 h2 {
//   width: 99vw;
//   position: sticky;
//   text-align: center;
//   top: 20%;
//   transform: translateY(-10%);
//   margin-bottom: 15%;
//   color: #d4d4d4;
//   font-size: var(--fs-xl);
//   font-weight: 500;
//   text-transform: uppercase;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .sec-9-card {
//   position: sticky;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   background-color: #000000;
//   color: #d4d4d4;
//   top: 30%;
//   width: 50vw;
//   height: 20vh;
//   border: 2px solid rgb(51, 51, 51);
//   border-radius: 1em;
//   overflow: hidden;
//   margin-top: 100px;
//   transition: transform 1s ease-in-out, z-index 0.4s ease;
//   z-index: calc(-1 * var(--card-stack-index));
//   transform: translateY(calc(var(--card-z-index) * 45px));
//   padding: 0.2em 0rem;
// }

// .sec-9-card-details {
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   height: 25%;
//   justify-content: space-between;
//   border-bottom: 2px dashed #323232;
//   padding-bottom: 0.3em;
// }

// .sec-9-card-details h4 {
//   font-size: var(--fs-m);
//   width: 10%;
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   color: #9bf00b;
//   font-weight: normal;
//   line-height: 100%;
// }

// .sec-9-card-details h3 {
//   text-align: center;
//   width: 100%;
//   color: #d4d4d4;
//   font-size: var(--fs-m);
//   text-transform: uppercase;
//   line-height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: max-content;
// }

// .sec-9-card p {
//   text-align: center;
//   padding: 1em 2em;
//   width: 100%;
// }

// @media screen and (max-width: 767px) {
//   .sec-9-card-container {
//     margin-bottom: calc(100% + 2em);
//   }

//   .sec-9 h2 {
//     font-size: var(--fs-m);
//     font-weight: 700;
//   }

//   .sec-9-card {
//     width: 70vw !important;
//     margin-top: 1rem;
//     padding: 1em;
//     height: auto;
//   }

//   .sec-9-card-details {
//     height: auto;
//   }

//   .sec-9-card-details h3 {
//     font-size: var(--fs-s);
//     font-weight: normal;
//     height: auto;
//     line-height: normal;
//   }

//   .sec-9-card-details h4 {
//     font-size: var(--fs-xs);
//     height: auto;
//   }

//   .sec-9-card p {
//     font-size: var(--fs-xs);
//     padding: 0.2em;
//     height: 100%;
//   }
// }

// @media screen and (min-width: 768px) and (max-width: 1024px) {
//   .sec-9-card-container {
//     margin-bottom: 40%;
//   }

//   .sec-9-card {
//     width: 70%;
//     margin-top: 1.5rem;
//     padding: 1.5em;
//   }
// }
