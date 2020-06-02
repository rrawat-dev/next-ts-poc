import React from 'react';
import NewsList from '../../organisms/NewsList/NewsList.connect';

const HomePage:React.FC = (props) => {
    return (
        <div>
            <NewsList />
        </div>
    );
}

export default HomePage;