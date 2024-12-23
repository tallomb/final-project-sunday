import os
import motor.motor_asyncio
from core.config import settings

mongodb_uri = os.getenv("DATABASE_URI") or settings.DATABASE_URL
client = motor.motor_asyncio.AsyncIOMotorClient(mongodb_uri)
db = client["SunDay"]