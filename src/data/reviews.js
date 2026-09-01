// Google reviews copied from the live Maps listing on 2026-09-01.
// Do not invent, paraphrase into new praise, or pad this list. If a theme
// (e.g. "web options") has no matching quote, leave it off the card tags.
// Listing: Siva Tuitions Pattabhipuram — 4.9 ★ from 1,142 reviews.

import { SITE } from './site.js';

export const GOOGLE_LISTING = {
  name: 'Siva Tuitions Pattabhipuram',
  ratingValue: '4.9',
  reviewCount: 1142,
  captured: '2026-09-01',
  mapsUrl:
    'https://www.google.com/maps/place/Siva+Tuitions+Pattabhipuram/@16.308244,80.4170475,17z/data=!4m8!3m7!1s0x3a4a7564ff317641:0x6ec8b552762c8f82!8m2!3d16.308244!4d80.4170475!9m1!1b1!16s%2Fg%2F11r_f9txp3',
};

/** Ten 5★ Google reviews chosen for counselling, EAMCET crash coaching, and tuitions. */
export const GOOGLE_REVIEWS = [
  {
    author: 'Shaik Baji',
    rating: 5,
    quote: 'Best EAMCET and Councling centre in Guntur',
    topics: ['counselling', 'engineering-admission'],
  },
  {
    author: 'Narasimha Ranganadham',
    rating: 5,
    quote: 'Good teaching for emcent and good councling',
    topics: ['counselling', 'engineering-admission'],
  },
  {
    author: 'venkat pasupuleti',
    rating: 5,
    quote:
      'Best coaching centre for EAMCET short term and for upe regular betterment and supplementary',
    topics: ['short-term-eamcet'],
  },
  {
    author: 'Prameela Adduri',
    rating: 5,
    quote:
      'Hey guys... hurry up here is the amazing tution point is excellent under the guidance of experienced professor are available..this is the best place for the students to learn subjects and concepts.. especially short term circullum is very planned students are gained good results also the students can builds self confidence.. I will surely say that this Siva tutions point is the best platform to gain the good Mark\'s.. and getting the subject knowledge.. here is the friendly teaching... And good environment for the students to study.. and the faculty is available for the competitive exams lik EAMCET, POLYTECHNIC,E-CET...',
    topics: ['tuitions', 'short-term-eamcet', 'engineering-admission'],
  },
  {
    author: 'DHARMAIAH G',
    rating: 5,
    quote:
      'This tuition point is excellent. Experienced faculty members are available. Especially, summer camp and short term circulum is very planned. Students are gained good results. Also, students builds self confidence.',
    topics: ['tuitions', 'short-term-eamcet'],
  },
  {
    author: 'Dhanunjaya Reddy',
    rating: 5,
    quote:
      'The best tution centre at Guntur. Mr. Muralikrishna is good at subject, also good at heart. He has been doing couple of service activities like funding meritorious poor in persuing higher studies. I admire his social responsibility, We at Nestham Foundation fortunate enough to partner him in serving the needy. Siva Tutions known for discipline and success. Wishing you all the best.',
    topics: ['tuitions'],
  },
  {
    author: 'Anitha Nutalapati',
    rating: 5,
    quote:
      'I had a very positive experience with Siva Tuitions and Coaching in Guntur. The teaching methods are clear, practical, and easy to understand, which really helped me build a strong foundation in my subjects. The faculty is highly knowledgeable, patient, and always willing to clarify doubts until concepts are fully understood. What I appreciate most is the individual attention given to each student, which makes learning more effective. The coaching environment is friendly, motivating, and well-organized, and the study materials provided are very helpful for exam preparation. Overall, Siva Tuitions is one of the best coaching centers in Guntur, and I would definitely recommend it to anyone looking for quality teaching and excellent guidance.',
    topics: ['tuitions'],
  },
  {
    author: 'hemanth cherukupalli',
    rating: 5,
    quote:
      'Very good. The faculty is very friendly and best faculty is available for competitive exams like IIT Foundation, E-cet, Eamcet and Polytechnic...',
    topics: ['engineering-admission'],
  },
  {
    author: 'Fayaaz Hakku',
    rating: 5,
    quote: 'Best EAPCET tuition point in guntur',
    topics: ['tuitions', 'engineering-admission'],
  },
  {
    author: 'Narasimharao Potula',
    rating: 5,
    quote: 'Best EAMCET coaching guidance and coaching',
    topics: ['counselling', 'engineering-admission'],
  },
];

export function googleAggregateRatingSchema() {
  return {
    '@type': 'AggregateRating',
    ratingValue: GOOGLE_LISTING.ratingValue,
    reviewCount: String(GOOGLE_LISTING.reviewCount),
    bestRating: '5',
    worstRating: '1',
  };
}

export function googleReviewsSchema() {
  return GOOGLE_REVIEWS.map((review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: review.author },
    reviewBody: review.quote,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(review.rating),
      bestRating: '5',
    },
    itemReviewed: {
      '@type': 'EducationalOrganization',
      name: SITE.name,
      url: SITE.url,
    },
  }));
}
