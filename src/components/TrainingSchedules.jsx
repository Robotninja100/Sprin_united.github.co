import React from 'react';

const TrainingSchedules = () => {
    const schedules = [
        { level: 'Beginner', desc: 'Start met hardlopen', duration: '8 weken', intensity: 'Laag' },
        { level: 'Gevorderd', desc: 'Verbeter je 5km tijd', duration: '10 weken', intensity: 'Gemiddeld' },
        { level: 'Expert', desc: 'Marathon voorbereiding', duration: '16 weken', intensity: 'Hoog' }
    ];

    return (
        <section id="training" style={{ padding: 'var(--spacing-xl) 0', background: 'var(--color-bg-card)' }}>
            <div className="container">
                <h2 className="section-title">Trainingsschema's</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}>
                    {schedules.map((schedule, index) => (
                        <div key={index} style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: 'var(--spacing-md)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'var(--color-primary-orange)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            }}
                        >
                            <h3 style={{ color: 'var(--color-primary-orange)', fontSize: '1.5rem' }}>{schedule.level}</h3>
                            <p style={{ marginBottom: '1rem', color: 'var(--color-text-light)' }}>{schedule.desc}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                                <span>⏱ {schedule.duration}</span>
                                <span>💪 {schedule.intensity}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingSchedules;
