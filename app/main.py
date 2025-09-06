from fastapi import FastAPI
from app.agent import Agent

app = FastAPI()
agent = Agent()

@app.post("/chat")
def chat(session_id: str, message: str, max_steps: int = 6):
    response = agent.run(session_id, message, max_steps)
    return {"response": response}
