import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
    return (
        <>
            <section className='min-vh-100' style={styles.section}>
                <h1>Ini halaman about</h1>
            </section>
        </>
    );
}

const styles = {
    section: {
        backgroundColor: "#FCFBF0",
    }
}

export default AboutUs;