import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from './styles'

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="">Begin work on</label>
                    <TaskInput id="task" list='task-suggestions' placeholder='Give a name to your task' />
                    <datalist id="task-suggestions">
                        <option value="Study language" />
                        <option value="Study tests " />
                        <option value="Practice the language" />
                        <option value="Colege class" />
                        <option value="Mind and Body" />
                    </datalist>
                    <label htmlFor="">over</label>
                    <MinutesAmountInput type='number' id="minutesAmount" placeholder='00' step={5} min={5} max={60} />

                    <span>minutes</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>

                </CountdownContainer>
                <StartCountdownButton type="submit" disabled>
                    <Play size={24} />Start
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}
