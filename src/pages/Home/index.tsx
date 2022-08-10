import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'


import {
    CountdownContainer,
    FormContainer,
    HomeContainer,
    MinutesAmountInput,
    Separator,
    StartCountdownButton,
    TaskInput
} from './styles'

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Inform the task"),
    minutesAmount: zod
        .number()
        .min(5, 'Min interval 5min')
        .max(120, 'Max interval 60min')
})

// Define validation object
// interface NewCycleFormData {
//     task: string
//     minutesAmount: number
// }

// Create a Tipo from another reference/variable
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    function handleCreateNewCycle(data: NewCycleFormData) {
        console.log(data)
        reset()
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="">Begin work on</label>
                    <TaskInput
                        id="task"
                        list='task-suggestions'
                        placeholder='Give a name to your task'
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
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />

                    <span>minutes</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>

                </CountdownContainer>
                <StartCountdownButton
                    type="submit"
                    disabled={isSubmitDisabled}
                >
                    <Play size={24} />Start
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}
