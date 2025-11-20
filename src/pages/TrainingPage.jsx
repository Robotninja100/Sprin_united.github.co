import React, { useState } from 'react';

const TrainingPage = () => {
    const [activeTab, setActiveTab] = useState('beginner');

    const schedules = {
        beginner: [
            // 8 Weeks - Focus: Run/Walk to 30 min continuous
            { week: 1, session1: 'Run 1 min, Walk 2 min (x10)', session2: 'Run 1 min, Walk 2 min (x10)', session3: 'Wandelen 30 min' },
            { week: 2, session1: 'Run 2 min, Walk 1 min (x10)', session2: 'Run 3 min, Walk 1.5 min (x6)', session3: 'Run 4 min, Walk 2 min (x5)' },
            { week: 3, session1: 'Run 3 min, Walk 1 min (x8)', session2: 'Run 4 min, Walk 1 min (x6)', session3: 'Run 5 min, Walk 1.5 min (x5)' },
            { week: 4, session1: 'Run 5 min, Walk 1 min (x5)', session2: 'Run 8 min, Walk 2 min (x3)', session3: 'Run 10 min, Walk 2 min (x2)' },
            { week: 5, session1: 'Run 8 min, Walk 1 min (x4)', session2: 'Run 12 min, Walk 2 min (x2)', session3: 'Run 15 min, Walk 2 min, Run 5 min' },
            { week: 6, session1: 'Run 15 min, Walk 1 min (x2)', session2: 'Run 20 min continuous', session3: 'Run 25 min continuous' },
            { week: 7, session1: 'Run 25 min continuous', session2: 'Run 28 min continuous', session3: 'Run 30 min continuous' },
            { week: 8, session1: 'Run 20 min easy', session2: 'Run 30 min or 5K Test', session3: 'Fun Run / Active Recovery' },
        ],
        gevorderd: [
            // 10 Weeks - Focus: 10km improvement (Intermediate)
            { week: 1, session1: 'Easy Run 5km', session2: 'Tempo: 10m easy, 15m tempo, 10m easy', session3: 'Long Run 7km' },
            { week: 2, session1: 'Easy Run 6km', session2: 'Intervals: 6x400m (5k pace)', session3: 'Long Run 8km' },
            { week: 3, session1: 'Easy Run 6km', session2: 'Tempo: 10m easy, 20m tempo, 10m easy', session3: 'Long Run 10km' },
            { week: 4, session1: 'Easy Run 6km', session2: 'Intervals: 8x400m (5k pace)', session3: 'Long Run 11km' },
            { week: 5, session1: 'Easy Run 7km', session2: 'Tempo: 10m easy, 25m tempo, 10m easy', session3: 'Long Run 13km' },
            { week: 6, session1: 'Easy Run 7km', session2: 'Intervals: 10x400m (5k pace)', session3: 'Long Run 14km' },
            { week: 7, session1: 'Easy Run 8km', session2: 'Tempo: 10m easy, 30m tempo, 10m easy', session3: 'Long Run 16km' },
            { week: 8, session1: 'Easy Run 6km', session2: 'Intervals: 6x400m (5k pace)', session3: 'Long Run 10km (Taper)' },
            { week: 9, session1: 'Easy Run 5km', session2: 'Short Tempo: 25 min total', session3: 'Easy Run 3km' },
            { week: 10, session1: 'Easy Run 3km + Strides', session2: 'Rest / Light Walk', session3: 'RACE DAY: 10KM' },
        ],
        expert: [
            // 16 Weeks - Focus: Half Marathon Performance
            // Phase 1: Base
            { week: 1, session1: 'Easy 6km', session2: 'Intervals 8x400m', session3: 'Tempo 30 min', session4: 'Long Run 10km' },
            { week: 2, session1: 'Easy 7km', session2: 'Intervals 10x400m', session3: 'Tempo 35 min', session4: 'Long Run 12km' },
            { week: 3, session1: 'Easy 8km', session2: 'Hills 8x1min', session3: 'Tempo 40 min', session4: 'Long Run 14km' },
            { week: 4, session1: 'Easy 6km', session2: 'Fartlek 30 min', session3: 'Easy 8km', session4: 'Long Run 10km (Recovery)' },
            // Phase 2: Build
            { week: 5, session1: 'Easy 8km', session2: 'Intervals 5x1000m', session3: 'Tempo 45 min', session4: 'Long Run 16km' },
            { week: 6, session1: 'Easy 8km', session2: 'Intervals 6x1000m', session3: 'Tempo 50 min', session4: 'Long Run 18km' },
            { week: 7, session1: 'Easy 10km', session2: 'Hills 10x1min', session3: 'Tempo 55 min', session4: 'Long Run 20km' },
            { week: 8, session1: 'Easy 8km', session2: 'Fartlek 40 min', session3: 'Easy 10km', session4: 'Long Run 12km (Recovery)' },
            // Phase 3: Peak
            { week: 9, session1: 'Easy 10km', session2: 'Intervals 3x2000m', session3: 'Tempo 60 min', session4: 'Long Run 22km' },
            { week: 10, session1: 'Easy 10km', session2: 'Intervals 4x2000m', session3: 'Tempo 45 min', session4: 'Long Run 24km' },
            { week: 11, session1: 'Easy 12km', session2: 'Hills 12x1min', session3: 'Tempo 40 min', session4: 'Long Run 21km' },
            { week: 12, session1: 'Easy 10km', session2: 'Intervals 10x400m', session3: 'Tempo 30 min', session4: 'Long Run 14km (Recovery)' },
            // Phase 4: Taper
            { week: 13, session1: 'Easy 10km', session2: 'Intervals 5x1000m', session3: 'Tempo 30 min', session4: 'Long Run 16km' },
            { week: 14, session1: 'Easy 8km', session2: 'Intervals 6x400m', session3: 'Tempo 20 min', session4: 'Long Run 12km' },
            { week: 15, session1: 'Easy 6km', session2: 'Strides 6x100m', session3: 'Easy 5km', session4: 'Rest' },
            { week: 16, session1: 'Shakeout 3km', session2: 'Rest', session3: 'Rest', session4: 'RACE DAY: 21.1KM' },
        ]
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <div className="container">
                <h1 className="section-title">Gedetailleerde Trainingsschema's</h1>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    {Object.keys(schedules).map(level => (
                        <button
                            key={level}
                            onClick={() => setActiveTab(level)}
                            className={`btn ${activeTab === level ? 'btn-primary' : 'btn-secondary'}`}
                            style={{ textTransform: 'capitalize' }}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                <div style={{
                    background: 'var(--color-bg-card)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    overflowX: 'auto'
                }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-primary-orange)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--color-primary-gold)' }}>Week</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Sessie 1</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Sessie 2</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Sessie 3</th>
                                {activeTab === 'expert' && <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Sessie 4</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {schedules[activeTab].map((week, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <td style={{ padding: '1rem', color: 'var(--color-primary-orange)', fontWeight: 'bold' }}>Week {week.week}</td>
                                    <td style={{ padding: '1rem', color: 'var(--color-text-light)' }}>{week.session1}</td>
                                    <td style={{ padding: '1rem', color: 'var(--color-text-light)' }}>{week.session2}</td>
                                    <td style={{ padding: '1rem', color: 'var(--color-text-light)' }}>{week.session3}</td>
                                    {activeTab === 'expert' && <td style={{ padding: '1rem', color: 'var(--color-text-light)' }}>{week.session4}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TrainingPage;
