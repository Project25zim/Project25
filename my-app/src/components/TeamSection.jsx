import React from 'react';
import '@/css/teamsection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Krystle Ketterer",
      role: "Volunteer",
      image: "/api/placeholder/400/400",
      socials: {
        facebook: "#",
        twitter: "#",
        youtube: "#"
      }
    },
    {
      name: "Randal Smith",
      role: "Volunteer",
      image: "/api/placeholder/400/400",
      socials: {
        facebook: "#",
        twitter: "#",
        youtube: "#"
      }
    },
    {
      name: "Carolyn Tipton",
      role: "Donation quality",
      image: "/api/placeholder/400/400",
      socials: {
        facebook: "#",
        twitter: "#",
        youtube: "#"
      }
    },
    {
      name: "Austin Nelson",
      role: "Donation quality",
      image: "/api/placeholder/400/400",
      socials: {
        facebook: "#",
        twitter: "#",
        youtube: "#"
      }
    },
    {
      name: "Clifford Neal",
      role: "Volunteer",
      image: "/api/placeholder/400/400",
      socials: {
        facebook: "#",
        twitter: "#",
        youtube: "#"
      }
    },
    {
      name: "Sylvia Pogue",
      role: "Volunteer",
      image: "/api/placeholder/400/400",
      socials: {
        facebook: "#",
        twitter: "#",
        youtube: "#"
      }
    },
    {
      name: "Daniel Cormier",
      role: "Volunteer",
      image: "/api/placeholder/400/400",
      socials: {
        facebook: "#",
        twitter: "#",
        youtube: "#"
      }
    },
    {
      name: "Julia Long",
      role: "Volunteer",
      image: "/api/placeholder/400/400",
      socials: {
        facebook: "#",
        twitter: "#",
        youtube: "#"
      }
    }
  ];

  return (
    <section className="team-section">
      <h2 className="text-4xl font-serif mb-8">Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <div className="social-links">
              <a href={member.socials.facebook} className="social-link" aria-label={`${member.name}'s Facebook`}>
                <Facebook size={20} />
              </a>
              <a href={member.socials.twitter} className="social-link" aria-label={`${member.name}'s Twitter`}>
                <Twitter size={20} />
              </a>
              <a href={member.socials.youtube} className="social-link" aria-label={`${member.name}'s YouTube`}>
                <Youtube size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;