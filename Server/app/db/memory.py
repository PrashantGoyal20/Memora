from sqlalchemy import Column, String, DateTime, Enum ,Float, ForeignKey,JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
import uuid
from app.db.enums import MemoryStatus, SpatialRelationType
from sqlalchemy.orm import sessionmaker, declarative_base

Base = declarative_base()

class VisualMemory(Base):
    __tablename__ = "visual_memories"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    image_url = Column(String, nullable=False)
    status = Column(Enum(MemoryStatus), default=MemoryStatus.processing)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class DetectedObject(Base):
    __tablename__ = "detected_objects"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    memory_id = Column(UUID(as_uuid=True), ForeignKey("visual_memories.id"), nullable=False)
    label = Column(String, nullable=False)
    confidence = Column(Float, nullable=False)
    x1 = Column(Float, nullable=False)
    y1 = Column(Float, nullable=False)
    x2 = Column(Float, nullable=False)
    y2 = Column(Float, nullable=False)


class SpatialRelation(Base):
    __tablename__ = "spatial_relations"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    memory_id = Column(UUID(as_uuid=True), ForeignKey("visual_memories.id"), nullable=False)

    subject_object_id = Column(UUID(as_uuid=True), ForeignKey("detected_objects.id"), nullable=False)
    relation = Column(Enum(SpatialRelationType), nullable=False)
    object_object_id = Column(UUID(as_uuid=True), ForeignKey("detected_objects.id"), nullable=False)

    confidence = Column(Float, nullable=False)


class VisualAttributes(Base):
    __tablename__ = "visual_attributes"

    memory_id = Column(UUID(as_uuid=True), ForeignKey("visual_memories.id"), primary_key=True)

    brightness = Column(Float)
    blur_score = Column(Float)
    edge_density = Column(Float)
    dominant_colors = Column(JSON)