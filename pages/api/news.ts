import { NextApiRequest, NextApiResponse } from 'next'
import {fetchNews} from '../../services/news/news.service';

export default function(req:NextApiRequest, res:NextApiResponse) {
    const params = {
        params: req.query || {}
    };

    fetchNews(params).then((data) => {
        res.send(JSON.stringify(data));
    });
};