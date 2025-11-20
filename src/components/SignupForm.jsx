import React, { useState } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        level: 'beginner'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Bedankt voor je aanmelding! We nemen snel contact op.');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 'var(--radius-sm)',
        color: 'white',
        marginBottom: '1rem',
        fontSize: '1rem'
    };

    return (
        <section id="signup" style={{ padding: 'var(--spacing-xl) 0' }}>
            <div className="container">
                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    background: 'var(--color-bg-card)',
                    padding: 'var(--spacing-lg)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-glow-blue)'
                }}>
                    <h2 className="section-title" style={{ marginBottom: '2rem' }}>Word Lid!</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Naam</label>
                            <input
                                type="text"
                                name="name"
                                style={inputStyle}
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                style={inputStyle}
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Leeftijd</label>
                                <input
                                    type="number"
                                    name="age"
                                    style={inputStyle}
                                    required
                                    value={formData.age}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Niveau</label>
                                <select
                                    name="level"
                                    style={inputStyle}
                                    value={formData.level}
                                    onChange={handleChange}
                                >
                                    <option value="beginner">Beginner</option>
                                    <option value="gevorderd">Gevorderd</option>
                                    <option value="expert">Expert</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                            Aanmelden
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignupForm;
