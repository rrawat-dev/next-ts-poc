import { fetchNews, hideNewsItem, upvoteNewsItem } from '../../services/news/news.service';

export interface Action {
    type: string,
    payload: any
};

export function showFullPageLoaderAction(showFullPageLoader: boolean):Action {
    return {
        type: 'SHOW_FULLPAGE_LOADER',
        payload: showFullPageLoader
    };
}

export function fetchNewsSuccessAction(news:any):Action {
    return {
        type: 'FETCH_NEWS_SUCCESS',
        payload: news
    };
}

export function fetchLatestNewsSuccessAction(news:any):Action {
    return {
        type: 'FETCH_LATEST_NEWS_SUCCESS',
        payload: news
    };
}

export function hideNewsItemSuccessAction(id:string):Action {
    return {
        type: 'HIDE_NEWS_ITEM',
        payload: id
    };
}

export function upvoteNewsItemSuccessAction(id:string, upvotes:number):Action {
    return {
        type: 'UPVOTE_NEWS_ITEM',
        payload: {
            id,
            upvotes
        }
    };
}

export function fetchNewsAsyncAction(options:any):Function {
    return (dispatch):Promise<any> => {
        dispatch(showFullPageLoaderAction(true));
        return fetchNews(options).then((news) => {
            if (options && options.page === 0) {
                dispatch(fetchLatestNewsSuccessAction(news));
            } else {
                dispatch(fetchNewsSuccessAction(news));
            }

            dispatch(showFullPageLoaderAction(false));
        }).catch(() => {
            dispatch(showFullPageLoaderAction(false));
        });
    };
}

export function hideNewsItemAsyncAction(id):Function {
    return (dispatch):Promise<any> => {
        dispatch(showFullPageLoaderAction(true));
        return hideNewsItem(id).then(() => {
            dispatch(hideNewsItemSuccessAction(id));
            dispatch(showFullPageLoaderAction(false));
        }).catch(() => {
            dispatch(showFullPageLoaderAction(false));
        });
    };
}


export function upvoteNewsItemAsyncAction(id:string, upvotes:number):Function {
    return (dispatch):Promise<any> => {
        dispatch(showFullPageLoaderAction(true));
    
        return upvoteNewsItem(id, upvotes).then(() => {
            dispatch(upvoteNewsItemSuccessAction(id, upvotes));
            dispatch(showFullPageLoaderAction(false));
        }).catch(() => {
            dispatch(showFullPageLoaderAction(false));
        });
    };
}
