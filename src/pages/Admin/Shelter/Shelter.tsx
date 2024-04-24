import styles from './Shelter.module.css'
import { Button } from "../../../components/common/Button"
import { Input } from "../../../components/common/Input"
import { Panel } from "../../../components/layout/Panel"

export function Shelter() {
    function submit (event) {
     event.preventDeFault()
     console.log('submit')
    }
    return <Panel>
        <form className={styles.container}>
            <Input label="nome" value='' />
            <Button type="submit">Salvar dados</Button>
        </form>

    </Panel>
}