import { useState } from "react"
import useQuery from "./useQuery"

function Home4() {
    const [pokemon, setPokemon] = useState("")

    // const fetchApi = useQuery()

    const tickets = {
        '0H2AZ123': null,
        '23LA9T41': 'Verena Nardi',
    };

    function ticketStatus(tickets, ticketId) {

        let TicketStatus = ""

        if (tickets[ticketId] === null) {

            TicketStatus = "not sold"

        } else if (tickets[ticketId] === undefined) {
            TicketStatus = "unknown ticket id"

            // } else if (tickets[ticketId] !== undefined || tickets[ticketId] !== null) {
        } else if (tickets[ticketId] ?? tickets[ticketId]) {

            TicketStatus = `"sold to ${tickets[ticketId]}"`
        }


        return TicketStatus
    }

    console.log(ticketStatus(tickets, '23LA9T41'))

    // console.log(ticketStatus(tickets, '0H2AZ123'))
    // console.log(ticketStatus(tickets, 'RE90VAW7'))



    return (
        <div>Home4</div>
    )
}

export default Home4