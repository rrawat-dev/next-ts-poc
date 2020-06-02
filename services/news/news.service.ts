import httpService from "../http/http.service";

function getCreatedOnText(date:Date):string {
    const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
    const diff = ((new Date().getTime()) - date.getTime()) / MILLISECONDS_IN_A_DAY;

    if (diff < 7) {
        return `${diff} day ago`; 
    } else if (diff < 28) {
        return `${Math.floor(diff / 7)} week ago`; 
    } else if (diff < 365) {
        return `${Math.floor(diff / 30)} month ago`; 
    } else {
        return `${Math.floor(diff / 365)} year ago`; 
    }
}

function getDomain(url:string):string {
    return url.replace(/https?:\/\/(www\.)?/, '').split('/')[0];
}

export function fetchNews(options?:any):Promise<any> {
    const url = global && global.localStorage ? '/api/news' : 'https://hn.algolia.com/api/v1/search';
    return httpService.get(url, (options || {})).then((res) => {
        return {
            ...res.data,
            hits: (res.data.hits || [])
                .filter(item => !!(item.title))
                .map(item => {
                    return {
                        ...item,
                        _createdOn: getCreatedOnText(new Date(item.created_at)),
                        _domain: getDomain(item.url || ''),
                        _upvotes: 0
                    };
                })
        };
    });
}

export function hideNewsItem(id:string):Promise<null> {
    return new Promise<null>((resolve, reject) => {
        if (global && global.localStorage) {
            let hiddenNewsItems = JSON.parse(global.localStorage.getItem('hiddenNewsItems') || '[]');
            hiddenNewsItems = hiddenNewsItems.filter(item => item !== id).concat(id);
            global.localStorage.setItem('hiddenNewsItems', JSON.stringify(hiddenNewsItems));
            
            setTimeout(() => {
                resolve(null);
            }, 1000);
        } else {
            reject(null);
        }
    });
}

export function upvoteNewsItem(id:string, upvotes:number):Promise<null> {
    return new Promise<null>((resolve, reject) => {
        if (global && global.localStorage) {
            let upvotedNewsItems = JSON.parse(global.localStorage.getItem('upvotedNewsItems') || '{}');
            upvotedNewsItems[id] = {
                _upvotes: upvotes
            };

            global.localStorage.setItem('upvotedNewsItems', JSON.stringify(upvotedNewsItems));
            
            setTimeout(() => {
                resolve(null);
            }, 1000);
        } else {
            reject(null);
        }
    });
}