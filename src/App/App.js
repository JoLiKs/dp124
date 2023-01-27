import { Footer, Header } from '../Features';
import { MainFirstScreen } from '../Features/MainFirstScreen/MainFirstScreen';
import { AccordionComponent } from '../Features/AccordionComponent/AccordionComponent';
import { PhotoIcon } from '../Shared';
import styles from './App.module.scss';

export const App = () => {
    return (
        <main className={styles.layout}>
            <Header />
            <MainFirstScreen />
            <PhotoIcon />
            <AccordionComponent />
            <Footer />
        </main>
    );
};
