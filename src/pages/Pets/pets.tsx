
import { Header } from "../../components/common/Header"
import { Grid } from "../../components/layout/Grid"
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card/Card"

import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


export function Pets() {
    return (
        <Grid>
            <div className={styles.container}>

                <Header />
                <main className={styles.list}>
                <Skeleton count={5}
                containerClassName={styles.skeleton} />
                   
                </main>
            </div>
        </Grid>
    )

}