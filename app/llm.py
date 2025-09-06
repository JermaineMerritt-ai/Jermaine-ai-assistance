import os
import openai
from dotenv import load_dotenv

load_dotenv()

class LLM:
    def __init__(self):
        self.api_key = os.getenv("AZURE_OPENAI_API_KEY")
        self.endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")

    def chat(self, prompt):
        # Stub: Azure OpenAI call
        return f"LLM response to: {prompt}"
