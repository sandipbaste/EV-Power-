import React from 'react';

const EmployeeBenefits = () => {
  // Sample employee data with images (replace with actual employee data)
  const employees = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Senior Engineer',
      testimonial: 'The health benefits at EV Power I are truly comprehensive. I\'ve never felt so supported by a company before.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Product Manager',
      testimonial: 'The flexible work policy allows me to balance my family needs with my career ambitions perfectly.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'James Chen',
      role: 'Marketing Director',
      testimonial: 'The professional development budget helped me earn two certifications this year that advanced my career.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  ];

  // Benefits data
  const benefits = [
    {
      id: 1,
      title: 'Health & Wellness',
      icon: (
        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bgColor: 'bg-green-500',
      textColor: 'text-green-500',
      items: [
        'Comprehensive medical, dental, and vision plans',
        'Mental health counseling services',
        '$500 annual fitness reimbursement'
      ]
    },
    {
      id: 2,
      title: 'Financial Benefits',
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-500',
      items: [
        'Competitive salary with annual reviews',
        '401(k) with 5% company match',
        'Annual performance bonuses',
        'Stock options for all employees'
      ]
    },
    {
      id: 3,
      title: 'Work-Life Balance',
      icon: (
        <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-500',
      items: [
        'Flexible hours and remote work options',
        '20 days PTO + 10 holidays + your birthday',
        '12 weeks paid parental leave',
        '4-week paid sabbatical every 5 years'
      ]
    },
    {
      id: 4,
      title: 'Learning & Development',
      icon: (
        <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bgColor: 'bg-yellow-500',
      textColor: 'text-yellow-500',
      items: [
        '$5,000 annual tuition reimbursement',
        'Conference and training budget',
        'Internal mentorship program',
        'Weekly knowledge sharing sessions'
      ]
    },
    {
      id: 5,
      title: 'Perks & Extras',
      icon: (
        <svg className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      bgColor: 'bg-rose-600',
      textColor: 'text-rose-600',
      items: [
        'Free EV charging at all company locations',
        'Company vehicle lease program',
        'Healthy meals and snacks',
        'Quarterly team outings and events'
      ]
    },
    {
      id: 6,
      title: 'EV-Specific Benefits',
      icon: (
        <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: 'bg-emerald-500',
      textColor: 'text-emerald-500',
      items: [
        'Employee discount on EV purchases',
        'Home charging station installation subsidy',
        'Access to latest EV models for testing',
        'Participation in industry conferences'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-700 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Employee Benefits
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            We invest in our team's health, happiness, and future.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className={`${benefit.bgColor} p-6`}>
                <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{benefit.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {benefit.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className={`h-5 w-5 ${benefit.textColor} mr-2 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))} 
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Employee Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Hear From Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {employees.map((employee) => (
              <div key={employee.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={employee.image} 
                    alt={employee.name} 
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">{employee.name}</h4>
                    <p className="text-blue-500">{employee.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{employee.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enjoy these amazing benefits and more as part of the EV Power I family.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Continue Your Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeBenefits;