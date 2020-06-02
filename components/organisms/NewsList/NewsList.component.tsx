import React, {Fragment, useEffect} from 'react';
import Loader from '../../atoms/Loader/Loader.component';
import StyledNewsList from './NewsList.style';
import Pagination from '../../molecules/Pagination/Pagination.component';

interface Props {
    news: any,
    fullPageLoader?: boolean,
    fetchNews: Function,
    hideNewsItem: Function,
    upvoteNewsItem: Function
};

const NewsList:React.FC<Props> = (props) => {
    const {news} = props;

    // history back handler
    useEffect(() => {
        window.onpopstate = function(e){
            if(e.state !== null) {
                fetchNewsPage(e.state.page);
            }
        }
    }, []);


    const hideNewsItem = (id:string) => {
        props.hideNewsItem(id);
    };

    const upvoteNewsItem = (newsItem:any) => {
        props.upvoteNewsItem(newsItem.objectID, newsItem.points ? newsItem.points + 1 : 1);
    };

    const fetchNewsPage = (page:number = 0) => {
        window.history.pushState({page}, `Hacker news: Page ${page + 1}`, `?page=${page}`);

        props.fetchNews({
            params: {
                page
            }
        });
    };

    return (
        <StyledNewsList>
            { props.fullPageLoader && <Loader /> }
            <div className="header">
                <ul className="links">
                    <li className="logo-link">
                        <span className="logo"><img src="images/y18.gif" alt="Site Logo" /></span>
                    </li>
                    <li className="link">
                        <button onClick={() => fetchNewsPage(0)}>top</button>
                    </li>
                    <li className="link">
                        <button onClick={() => fetchNewsPage(0)}>new</button>
                    </li>
                </ul>
            </div>
            {
                news.hits.length === 0
                &&
                <p className="no-results">Sorry, currently no results available for your request. Please try later.</p>
            }
            {
                news.hits.length > 0
                &&
                (
                    <Fragment>
                        <ul className="newsitems">
                        {
                            news.hits.map(newsItem => (
                                <li className="newsitem" key={newsItem.objectID}>
                                    <div className="title">{newsItem.title}</div>
                                    <div className="additional-info">
                                    {
                                    `${newsItem._domain ? '('+newsItem._domain+') ' : ''}by ${newsItem.author} ${newsItem._createdOn}`
                                    }                                
                                    </div>
                                    <div className="comments">
                                        {newsItem.num_comments || 0}
                                    </div>
                                    <div className="upvotes">
                                        <span className="upvote">{newsItem.points}</span>
                                        <button className="icon" onClick={() => upvoteNewsItem(newsItem)}>upvote</button>
                                    </div>
                                    <div className="hide-info">
                                        <button className="hide-link" onClick={() => hideNewsItem(newsItem.objectID)}>{" [ hide ] "}</button>
                                    </div>
                                </li>
                            ))
                        }
                        </ul>
                        <Pagination onPaginate={fetchNewsPage} totalPages={news.nbPages} currentPage={news.page} />
                    </Fragment>
                )
            }
            <div className="footer">React SSR Demo</div>
        </StyledNewsList>
    );
}

export default NewsList;