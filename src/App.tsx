import { useState } from 'react';
import { Header } from './components/Header';
import { SeminarCard } from './components/SeminarCard';
import { Footer } from './components/Footer';

export interface Seminar {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
}

const seminars: Seminar[] = [
  {
    id: '1',
    title: 'Grant Writing Fundamentals',
    description: 'Master the basics of grant writing including research, proposal structure, and compelling narratives that win funding.',
    price: 299,
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    id: '2',
    title: 'Advanced Grant Strategy',
    description: 'Develop sophisticated funding strategies, learn to identify the right opportunities, and build lasting funder relationships.',
    price: 449,
    duration: '8 weeks',
    level: 'Advanced'
  },
  {
    id: '3',
    title: 'Budget Development for Grants',
    description: 'Learn to create accurate, detailed budgets that align with your proposal narrative and meet funder requirements.',
    price: 349,
    duration: '4 weeks',
    level: 'Intermediate'
  },
  {
    id: '4',
    title: 'Federal Grant Applications',
    description: 'Navigate the complexities of federal grant applications, including Grants.gov, compliance, and reporting requirements.',
    price: 399,
    duration: '6 weeks',
    level: 'Intermediate'
  },
  {
    id: '5',
    title: 'Corporate & Foundation Funding',
    description: 'Explore strategies for securing funding from corporate sponsors and private foundations with proven approaches.',
    price: 329,
    duration: '5 weeks',
    level: 'Beginner'
  },
  {
    id: '6',
    title: 'Grant Management & Reporting',
    description: 'Master post-award grant management, compliance, reporting, and building capacity for sustainable funding.',
    price: 379,
    duration: '6 weeks',
    level: 'Advanced'
  }
];

export default function App() {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = (seminarId: string) => {
    setCartItems(prev => [...prev, seminarId]);
  };

  const removeFromCart = (seminarId: string) => {
    setCartItems(prev => {
      const index = prev.indexOf(seminarId);
      if (index > -1) {
        const newCart = [...prev];
        newCart.splice(index, 1);
        return newCart;
      }
      return prev;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header cartCount={cartItems.length} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0C4A6E] to-[#075985] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Professional Grant Writing Training</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Transform your grant writing skills with our comprehensive training programs. 
            Learn from industry experts and secure funding for your organization.
          </p>
        </div>
      </section>

      {/* Seminars Section */}
      <main className="flex-1 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[#0C4A6E]">Available Training Seminars</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of professional development courses designed to enhance your grant writing expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seminars.map(seminar => (
              <SeminarCard
                key={seminar.id}
                seminar={seminar}
                onAddToCart={addToCart}
                isInCart={cartItems.includes(seminar.id)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center mb-12 text-[#0C4A6E]">Why Choose Our Training Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0C4A6E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from seasoned grant professionals with decades of combined experience</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0C4A6E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Proven Results</h3>
              <p className="text-gray-600">Our graduates have secured millions in funding for their organizations</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0C4A6E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Flexible Learning</h3>
              <p className="text-gray-600">Online courses that fit your schedule with lifetime access to materials</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
