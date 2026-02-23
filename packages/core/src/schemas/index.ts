/**
 * @module @minions-comms/sdk/schemas
 * Custom MinionType schemas for Minions Comms.
 */

import type { MinionType } from 'minions-sdk';

export const messageType: MinionType = {
  id: 'comms-message',
  name: 'Message',
  slug: 'message',
  description: 'A single message sent or received on any platform or channel.',
  icon: '✉️',
  schema: [
    { name: 'threadId', type: 'string', label: 'threadId' },
    { name: 'authorId', type: 'string', label: 'authorId' },
    { name: 'authorType', type: 'select', label: 'authorType' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'sentAt', type: 'string', label: 'sentAt' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'isInbound', type: 'boolean', label: 'isInbound' },
  ],
};

export const threadType: MinionType = {
  id: 'comms-thread',
  name: 'Thread',
  slug: 'thread',
  description: 'A grouped conversation with a topic and set of participants.',
  icon: '💬',
  schema: [
    { name: 'topic', type: 'string', label: 'topic' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'participantIds', type: 'string', label: 'participantIds' },
    { name: 'contextRefType', type: 'string', label: 'contextRefType' },
    { name: 'contextRefId', type: 'string', label: 'contextRefId' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
    { name: 'lastMessageAt', type: 'string', label: 'lastMessageAt' },
  ],
};

export const notificationType: MinionType = {
  id: 'comms-notification',
  name: 'Notification',
  slug: 'notification',
  description: 'An outbound alert sent to a human with delivery tracking.',
  icon: '🔔',
  schema: [
    { name: 'recipientId', type: 'string', label: 'recipientId' },
    { name: 'channel', type: 'select', label: 'channel' },
    { name: 'subject', type: 'string', label: 'subject' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'sentAt', type: 'string', label: 'sentAt' },
    { name: 'deliveryStatus', type: 'select', label: 'deliveryStatus' },
    { name: 'contextRefType', type: 'string', label: 'contextRefType' },
    { name: 'contextRefId', type: 'string', label: 'contextRefId' },
  ],
};

export const followupType: MinionType = {
  id: 'comms-follow-up',
  name: 'Follow up',
  slug: 'follow-up',
  description: 'A scheduled follow-up action tied to a thread or contact.',
  icon: '⏰',
  schema: [
    { name: 'threadId', type: 'string', label: 'threadId' },
    { name: 'dueAt', type: 'string', label: 'dueAt' },
    { name: 'reason', type: 'string', label: 'reason' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'assignedTo', type: 'string', label: 'assignedTo' },
  ],
};

export const customTypes: MinionType[] = [
  messageType,
  threadType,
  notificationType,
  followupType,
];

