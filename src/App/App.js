import { Footer, Header } from '../Features';
import { MainFirstScreen } from '../Features/MainFirstScreen/MainFirstScreen';
import styles from './App.module.scss';

export const App = () => {
    return (
        <main className={styles.layout}>
            <Header />
            <MainFirstScreen />
            <Footer />
        </main>
    );
};
