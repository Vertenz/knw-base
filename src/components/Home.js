import React from 'react';

const Home = () => {
    return (
        <main className='home'>
            <div className="home__left">
                <p>Моя шпаргалка по вэб-разработке</p>
                <h1>База знаний по <span className='attention'>Frontend</span></h1>
                <p>Photo by <a href="https://www.pexels.com/@neo-853421?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Neo</a>
                    from <a href="https://www.pexels.com/">Pexels</a></p>
            </div>
        </main>
    );
};

export default Home;
