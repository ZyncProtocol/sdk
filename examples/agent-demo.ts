import { registerAgent } from "../src/identity/registerAgent"
import { verifyAgent } from "../src/verification/verifyAgent"

async function demo() {

    const agent = await registerAgent({
        name: "AutonomousTrader",
        owner: "0xAgentWallet"
    })

    console.log(agent)

    const verification = await verifyAgent(agent.id)

    console.log(verification)

}

demo()
