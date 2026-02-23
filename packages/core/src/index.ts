/**
 * Minions Comms SDK
 *
 * Messages, threads, and notifications across all communication channels
 *
 * @module @minions-comms/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Comms.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
