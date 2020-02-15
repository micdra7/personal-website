import React from 'react';
import './MainInfo.scss';

const MainInfo: React.FC = () => (
    <div className='main-info'>
        <header>
            <h1>Michal Drabik</h1>
            <h5>Fullstack Web Developer</h5>
        </header>

        <main>
        <h3>About me</h3>
            <p>
                I am an aspiring fullstack developer with particular love
                for C# (.NET Core) and Javascript (React). Since I am
                constantly trying to improve and expand my skillset, I am open
                to any other tech stack.
            </p>
            <p>
                I am currently studying Computer Science at
                Silesian University of Technology, faculty of
                Automatic Control, Electronics and Computer Science.
            </p>
        </main>
    </div>
);

export default MainInfo;
