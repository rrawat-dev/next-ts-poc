import {wrapper} from '../redux/store/index';
import { fetchNewsAsyncAction } from '../redux/actions/news.actions';
import HomePage from '../components/pages/HomePage/HomePage.connect';
import { GetServerSideProps } from 'next'

export const getStaticProps:GetServerSideProps = wrapper.getServerSideProps(
    ({store}) => {
        // @ts-ignore: Unreachable code error
        return store.dispatch(fetchNewsAsyncAction());
    }
);

export default HomePage;