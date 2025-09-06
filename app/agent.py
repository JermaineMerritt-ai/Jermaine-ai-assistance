from app.llm import LLM
from app.memory import Memory
from app.models import ChatRequest
from app.tools.registry import ToolRegistry

class Agent:
    def __init__(self):
        self.llm = LLM()
        self.memory = Memory()
        self.tools = ToolRegistry()

    def run(self, session_id, message, max_steps):
        # Stub: Reasoning and tool invocation logic
        return f"Processed: {message} (session: {session_id}, steps: {max_steps})"
