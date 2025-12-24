from fastapi import FastAPI
from app.logger import setup_logging
from loguru import logger
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os
from dotenv import load_dotenv
load_dotenv()

setup_logging()
engine=create_engine(url=os.getenv("DATABASE_URL"))
print("POSTGRESQL DATABASE CONNECTED")

SessionLocal = sessionmaker(
    autocommit=True,
    autoflush=False,
    bind=engine
)

app = FastAPI(title="MEMORA")


