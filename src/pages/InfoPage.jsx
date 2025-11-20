import React from 'react';
import shoesImg from '../assets/shoes.png';
import snacksImg from '../assets/snacks.png';

const InfoPage = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <div className="container">
                <h1 className="section-title">Informatie & Tips</h1>

                <article style={{
                    background: 'var(--color-bg-card)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: '3rem'
                }}>
                    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={shoesImg} alt="Hardloopschoenen" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                        <div>
                            <h2 style={{ color: 'var(--color-primary-orange)', marginBottom: '1rem' }}>Alles over Hardloopschoenen</h2>
                            <p style={{ marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                                Goede hardloopschoenen zijn de belangrijkste investering voor elke loper. Ze voorkomen blessures en zorgen voor meer loopplezier.
                            </p>
                            <h3 style={{ color: 'var(--color-secondary-blue)', marginBottom: '0.5rem' }}>Waar moet je op letten?</h3>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                <li><strong>Demping:</strong> Zorgt voor schokabsorptie tijdens het landen.</li>
                                <li><strong>Stabiliteit:</strong> Ondersteunt de voet als deze naar binnen kantelt (overpronatie).</li>
                                <li><strong>Pasvorm:</strong> Je moet ongeveer een duimbreedte ruimte hebben bij je tenen.</li>
                            </ul>
                            <p style={{ color: 'var(--color-text-light)' }}>
                                Laat je altijd adviseren in een speciaalzaak waar ze een loopanalyse kunnen maken.
                            </p>
                        </div>
                    </div>
                </article>

                <article style={{
                    background: 'var(--color-bg-card)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: '3rem'
                }}>
                    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={snacksImg} alt="Gezonde Voeding" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                        <div>
                            <h2 style={{ color: 'var(--color-primary-gold)', marginBottom: '1rem' }}>Voeding voor Jonge Atleten</h2>
                            <p style={{ marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                                Je lichaam is als een motor: zonder de juiste brandstof sta je stil. Gezond eten helpt je sneller te rennen en beter te herstellen.
                            </p>
                            <h3 style={{ color: 'var(--color-secondary-blue)', marginBottom: '0.5rem' }}>Belangrijke tips:</h3>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                <li><strong>Koolhydraten:</strong> De belangrijkste energiebron (brood, pasta, fruit).</li>
                                <li><strong>Eiwitten:</strong> Bouwstenen voor je spieren (zuivel, eieren, noten).</li>
                                <li><strong>Hydratatie:</strong> Drink voldoende water, zeker op warme dagen!</li>
                            </ul>
                            <p style={{ color: 'var(--color-text-light)' }}>
                                Eet ongeveer 2 uur voor je training een lichte maaltijd, en neem direct na de training iets met eiwitten.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default InfoPage;
