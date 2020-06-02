import {Action} from '../actions/news.actions';

export default function fullpageLoader(fullpageLoader:boolean = false, action:Action):any {
    switch(action.type) {
        case 'SHOW_FULLPAGE_LOADER':
            return action.payload;
        default:
            return fullpageLoader;
    }
}