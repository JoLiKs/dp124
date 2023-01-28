import { Footer, Header } from '../Features';
import { BrowserRouter } from 'react-router-dom';
import { RouterComponent } from '../Features/RouterComponent/RouterComponent';
import styles from './App.module.scss';

export const App = () => {
    return (
        <main className={styles.layout}>
            <BrowserRouter>
                <Header />
                <RouterComponent />
                <Footer />
            </BrowserRouter>
        </main>
    );
};
