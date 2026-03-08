import { Agent } from "../types/agent"

export async function getAgent(id: string): Promise<Agent | null> {

    return {
        id,
        name: "Demo Agent",
        owner: "0x123wallet",
        reputation: 75
    }

}
