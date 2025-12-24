from enum import Enum

class MemoryStatus(str, Enum):
    processing = "processing"
    ready = "ready"
    failed = "failed"


class SpatialRelationType(str, Enum):
    left_of = "left_of"
    right_of = "right_of"
    overlapping = "overlapping"
    near = "near"