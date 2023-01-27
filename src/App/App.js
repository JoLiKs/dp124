import { Footer, Header } from '../Features';
import { MainFirstScreen } from '../Features/MainFirstScreen/MainFirstScreen';
import { AccordionComponent } from '../Features/AccordionComponent/AccordionComponent';
import { PhotoIcon } from '../Shared';
import styles from './App.module.scss';
import { Tabs } from '../Shared/Tabs/Tabs';

export const App = () => {
    const items = [
        { title: 'London', content: 'London is the capital city of England.' },
        { title: 'Paris', content: 'Paris is the capital of France.' },
        { title: 'Tokyo', content: 'Tokyo is the capital of Japan.' },
    ];
    return (
        <main className={styles.layout}>
            <Header />
            <Tabs items={items} />
            <MainFirstScreen />
            <PhotoIcon />
            <AccordionComponent />
            <Footer />
        </main>
    );
};
