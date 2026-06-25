import React from 'react';
import Contact from '../components/contact';

const ERP = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh', padding: '120px 20px 60px' }} className="erp-page">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontFamily: "'Outfit', sans-serif" }}>
          Enterprise Resource Planning (ERP)
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px', maxWidth: '800px' }}>
          Streamline your business operations with our comprehensive, custom-built ERP solutions. Manage everything from supply chain and inventory to human resources and customer relations in one unified platform.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          <div style={{ padding: '30px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #eaeaea' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Financial Management</h3>
            <p style={{ color: '#666' }}>Comprehensive tools for accounting, budgeting, and financial reporting with real-time insights.</p>
          </div>
          <div style={{ padding: '30px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #eaeaea' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Supply Chain</h3>
            <p style={{ color: '#666' }}>End-to-end visibility of your supply chain, from procurement to inventory management and fulfillment.</p>
          </div>
          <div style={{ padding: '30px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #eaeaea' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Human Resources</h3>
            <p style={{ color: '#666' }}>Manage employee data, payroll, recruitment, and performance evaluations seamlessly.</p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ERP;
