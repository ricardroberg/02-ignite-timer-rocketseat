import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
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
                        <tr>
                            <td>Studying React.js</td>
                            <td>60 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statusColor="green">Done</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Studying React.js</td>
                            <td>60 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statusColor="green">Done</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Studying React.js</td>
                            <td>60 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statusColor="yellow">In progress</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Studying React.js</td>
                            <td>60 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statusColor="green">Done</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Studying React.js</td>
                            <td>60 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statusColor="yellow">In progress</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Studying React.js</td>
                            <td>60 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statusColor="red">Paused</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Studying React.js</td>
                            <td>60 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statusColor="red">Paused</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Studying React.js</td>
                            <td>60 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statusColor="green">Done</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}
