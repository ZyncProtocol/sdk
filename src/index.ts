import { registerAgent } from "./identity/registerAgent"
import { getReputation } from "./reputation/getReputation"

async function main() {

    const agent = await registerAgent({
        name: "TradingAgent01",
        owner: "0x123wallet",
        metadata: {
            type: "AI Trading Bot"
        }
    })

    console.log("Agent Registered:", agent)

    const reputation = await getReputation(agent.id)

    console.log("Agent Reputation:", reputation)

}

main()
