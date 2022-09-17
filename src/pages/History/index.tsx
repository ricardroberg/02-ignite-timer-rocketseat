import { useContext } from "react";
import { formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR" //translate to Brazilian portuguese
import { CyclesContext } from "../../contexts/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
    const { cycles } = useContext(CyclesContext)
    return (
        <HistoryContainer>
            <h1>My History</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Duration</th>
                            <th>Beggining</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map(cycle => {
                            return (
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.minutesAmount} minutes</td>
                                    <td>{formatDistanceToNow(cycle.startDate, {
                                        addSuffix: true,
                                        // locale: ptBR, // PT-BR translate
                                    })}</td>
                                    <td>
                                        {cycle.finishedDate &&
                                            <Status statusColor="green">Done</Status>
                                        }
                                        {cycle.interruptedDate &&
                                            <Status statusColor="red">Paused</Status>
                                        }
                                        {!cycle.finishedDate && !cycle.interruptedDate &&
                                            <Status statusColor="yellow">In progress</Status>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}
