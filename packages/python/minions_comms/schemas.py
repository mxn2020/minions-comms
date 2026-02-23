"""
Minions Comms SDK — Type Schemas
Custom MinionType schemas for Minions Comms.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

message_type = MinionType(
    id="comms-message",
    name="Message",
    slug="message",
    description="A single message sent or received on any platform or channel.",
    icon="✉️",
    schema=[
        FieldDefinition(name="threadId", type="string", label="threadId"),
        FieldDefinition(name="authorId", type="string", label="authorId"),
        FieldDefinition(name="authorType", type="select", label="authorType"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="sentAt", type="string", label="sentAt"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="isInbound", type="boolean", label="isInbound"),
    ],
)

thread_type = MinionType(
    id="comms-thread",
    name="Thread",
    slug="thread",
    description="A grouped conversation with a topic and set of participants.",
    icon="💬",
    schema=[
        FieldDefinition(name="topic", type="string", label="topic"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="participantIds", type="string", label="participantIds"),
        FieldDefinition(name="contextRefType", type="string", label="contextRefType"),
        FieldDefinition(name="contextRefId", type="string", label="contextRefId"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
        FieldDefinition(name="lastMessageAt", type="string", label="lastMessageAt"),
    ],
)

notification_type = MinionType(
    id="comms-notification",
    name="Notification",
    slug="notification",
    description="An outbound alert sent to a human with delivery tracking.",
    icon="🔔",
    schema=[
        FieldDefinition(name="recipientId", type="string", label="recipientId"),
        FieldDefinition(name="channel", type="select", label="channel"),
        FieldDefinition(name="subject", type="string", label="subject"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="sentAt", type="string", label="sentAt"),
        FieldDefinition(name="deliveryStatus", type="select", label="deliveryStatus"),
        FieldDefinition(name="contextRefType", type="string", label="contextRefType"),
        FieldDefinition(name="contextRefId", type="string", label="contextRefId"),
    ],
)

follow_up_type = MinionType(
    id="comms-follow-up",
    name="Follow up",
    slug="follow-up",
    description="A scheduled follow-up action tied to a thread or contact.",
    icon="⏰",
    schema=[
        FieldDefinition(name="threadId", type="string", label="threadId"),
        FieldDefinition(name="dueAt", type="string", label="dueAt"),
        FieldDefinition(name="reason", type="string", label="reason"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="assignedTo", type="string", label="assignedTo"),
    ],
)

custom_types: list[MinionType] = [
    message_type,
    thread_type,
    notification_type,
    follow_up_type,
]

