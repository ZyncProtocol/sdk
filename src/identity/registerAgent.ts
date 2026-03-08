import { v4 as uuidv4 } from "uuid"
import { Agent } from "../types/agent"

export async function registerAgent(data: Partial<Agent>): Promise<Agent> {

    const agent: Agent = {

        id: uuidv4(),
        name: data.name || "Unnamed Agent",
        owner: data.owner || "",
        metadata: data.metadata,
        reputation: 0
    }

    return agent
}
