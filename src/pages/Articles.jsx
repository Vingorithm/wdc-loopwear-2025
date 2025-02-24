import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Articles = () => {
    return (
        <>
            <section className='min-vh-100' style={styles.section}>
                <h1>Ini halaman articles</h1>
            </section>
        </>
    );
}

const styles = {
    section: {
        backgroundColor: "#FCFBF0",
    }
}

export default Articles;