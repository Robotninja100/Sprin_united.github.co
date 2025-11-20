import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import TrainingSchedules from '../components/TrainingSchedules';
import SignupForm from '../components/SignupForm';
import shoesImg from '../assets/shoes.png';
import snacksImg from '../assets/snacks.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Hero />

            <section id="info-preview" style={{ padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <h2 className="section-title">Alles voor de jonge loper</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div style={{
                            background: 'var(--color-bg-card)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            textAlign: 'center'
                        }}>
                            <img src={shoesImg} alt="Schoenen" style={{ width: '100%', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
                            <h3>De Juiste Gear</h3>
                            <p>Ontdek welke schoenen bij jou passen.</p>
                            <Link to="/info" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Lees Meer</Link>
                        </div>
                        <div style={{
                            background: 'var(--color-bg-card)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            textAlign: 'center'
                        }}>
                            <img src={snacksImg} alt="Voeding" style={{ width: '100%', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
                            <h3>Gezonde Voeding</h3>
                            <p>Wat moet je eten voor een topprestatie?</p>
                            <Link to="/info" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Lees Meer</Link>
                        </div>
                    </div>
                </div>
            </section>

            <TrainingSchedules />
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <Link to="/training" className="btn btn-primary">Bekijk Volledige Schema's</Link>
            </div>

            <SignupForm />
        </>
    );
};

export default Home;
