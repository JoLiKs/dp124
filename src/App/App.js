import { createContext, Suspense, useEffect, useState } from 'react';
import { Footer, Header } from '../Features';
import { BrowserRouter } from 'react-router-dom';
import { RouterComponent } from '../Features/RouterComponent/RouterComponent';
import { getDateLessons } from '../Shared/api';
import styles from './App.module.scss';

export const CoursesContext = createContext([]);

export const App = () => {
    const [coursesDate, setCoursesDate] = useState([]);
    const handleData = async () => {
        const data = await getDateLessons('date/getAll');
        return await data.json();
    };

    useEffect(() => {
        handleData()
            .then((json) => setCoursesDate(json))
            .catch((e) => console.error(e));
    }, []);

    return (
        <BrowserRouter>
            <CoursesContext.Provider value={[coursesDate]}>
                <Header />
                <Suspense fallback="Loading.........">
                    <main className={styles.layout}>
                        <RouterComponent />
                    </main>
                    <Footer />
                </Suspense>
            </CoursesContext.Provider>
        </BrowserRouter>
    );
};
