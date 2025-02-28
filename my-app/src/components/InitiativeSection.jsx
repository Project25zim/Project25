import React from 'react';
import InitiativeCard from '@/components/InitiativeCard';

const initiativesData = [
  {
    id: 1,
    title: "Environmental Conservation",
    description: "Supporting local ecosystems and promoting sustainable practices in our community.",
    imageUrl: "/api/placeholder/400/300",
    fullDescription: "Our environmental conservation initiative focuses on protecting local wildlife, reducing carbon emissions, and educating the community about sustainable practices. Through partnerships with local organizations, we've implemented recycling programs, organized clean-up drives, and established community gardens."
  },
  {
    id: 2,
    title: "Youth Education",
    description: "Empowering young minds through innovative educational programs and mentorship.",
    imageUrl: "/api/placeholder/400/300",
    fullDescription: "The youth education program provides after-school tutoring, STEM workshops, and mentorship opportunities for students aged 12-18. We work closely with local schools to identify and support students who would benefit most from additional educational resources."
  },
  {
    id: 3,
    title: "Community Health",
    description: "Promoting wellness and providing access to essential health resources.",
    imageUrl: "/api/placeholder/400/300",
    fullDescription: "Our community health initiative includes free health screenings, wellness workshops, and partnerships with local healthcare providers. We focus on preventive care and health education, making these resources accessible to underserved communities."
  },
  {
    id: 4,
    title: "Economic Empowerment",
    description: "Building financial literacy and creating opportunities for economic growth.",
    imageUrl: "/api/placeholder/400/300",
    fullDescription: "Through financial education workshops, job training programs, and small business support, we help community members build sustainable economic futures. Our partnerships with local businesses create job opportunities and mentorship programs."
  }
];

export { initiativesData };

const InitiativesSection = () => {
  return (
    <section className="initiatives-section">
      <h2 className="section-title">Our Initiatives</h2>
      <div className="initiatives-grid">
        {initiativesData.map(initiative => (
          <InitiativeCard
            key={initiative.id}
            {...initiative}
          />
        ))}
      </div>
    </section>
  );
};

export default InitiativesSection;