export async function verifyAgent(agentId: string) {

    return {
        agentId,
        verified: true,
        verifier: "Zync Protocol"
    }

}
