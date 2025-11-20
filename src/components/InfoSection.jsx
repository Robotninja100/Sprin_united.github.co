import React from 'react';

const InfoSection = ({ title, content, image, reverse }) => {
    return (
        <section id="info" style={{ padding: 'var(--spacing-xl) 0' }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: reverse ? 'row-reverse' : 'row',
                alignItems: 'center',
                gap: 'var(--spacing-lg)'
            }}>
                <div style={{ flex: 1 }}>
                    <div style={{
                        position: 'relative',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-card)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <img src={image} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                        }}></div>
                    </div>
                </div>

                <div style={{ flex: 1 }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        color: 'var(--color-primary-gold)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        {title}
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        {content}
                    </p>
                    <button className="btn btn-secondary">Lees meer</button>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
