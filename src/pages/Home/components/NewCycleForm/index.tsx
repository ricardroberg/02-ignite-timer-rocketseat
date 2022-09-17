import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()

    return (
        <FormContainer>
            <label htmlFor="">Begin work on</label>
            <TaskInput
                id="task"
                list='task-suggestions'
                placeholder='Give a name to your task'
                disabled={!!activeCycle}
                {...register('task')}
            />
            <datalist id="task-suggestions">
                <option value="Study language" />
                <option value="Study tests " />
                <option value="Practice the language" />
                <option value="Colege class" />
                <option value="Mind and Body" />
            </datalist>
            <label htmlFor="">over</label>
            <MinutesAmountInput
                type='number'
                id="minutesAmount"
                placeholder='00'
                step={5}
                min={5}
                max={60}
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutes</span>
        </FormContainer>
    )
}
