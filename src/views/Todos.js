import { observer } from 'mobx-react-lite';
import React, {useState} from 'react'
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap"

import TodosList from '../components/TodosList'


const Todos = observer(() => {
    const [value, setValue] = useState(['none']);
    const handleChange = (val) => {
        setValue(val)
        console.log(val)
    }

    return (
        <div>
            <div>
            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton variant="dark" id="tbg-btn-1" value='favourite'>
                    favourite
                </ToggleButton>
                <ToggleButton variant="dark" id="tbg-btn-2" value='done'>
                    done
                </ToggleButton>
                <ToggleButton variant="dark" id="tbg-btn-3" value='not done'>
                    not done
                </ToggleButton>
            </ToggleButtonGroup>
            </div>
            <div>
                <TodosList sort = {value} />
            </div>
        </div>
    )
})

export default Todos