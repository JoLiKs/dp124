import { Suspense } from 'react';
import { Footer, Header } from '../Features';
import { BrowserRouter } from 'react-router-dom';
import { RouterComponent } from '../Features/RouterComponent/RouterComponent';
import styles from './App.module.scss';

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback="Loading.........">
                <main className={styles.layout}>
                    <RouterComponent />
                </main>
                <Footer />
            </Suspense>
        </BrowserRouter>
    );
};
