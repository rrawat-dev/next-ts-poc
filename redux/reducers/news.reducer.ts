import {Action} from '../actions/news.actions';

export default function news(news:any = {}, action:Action) {
    switch(action.type) {
        case 'FETCH_NEWS_SUCCESS':
            return {
                ...action.payload,
                hits: (news.hits || []).concat(action.payload.hits)
            };
        case 'FETCH_LATEST_NEWS_SUCCESS':
            return {
                ...action.payload
            };
        case 'FETCH_NEWS_ERROR':
            return {};
        case 'HIDE_NEWS_ITEM':
            return {
                ...news,
                hits: (news.hits || []).filter(item => item.objectID !== action.payload)
            };
        case 'UPVOTE_NEWS_ITEM':
            return {
                ...news,
                hits: (news.hits || []).map(item => {
                    if (item.objectID === action.payload.id) {
                        return {
                            ...item,
                            points: action.payload.upvotes
                        };
                    }

                    return item;
                })
            };
        default:
            return news;
    }
}