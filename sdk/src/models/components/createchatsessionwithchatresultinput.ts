/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ChatSessionInput, ChatSessionInput$ } from "./chatsessioninput";
import { z } from "zod";

export enum Two {
    Turbo = "turbo",
    Auto = "auto",
}

export type ChatMode = string | Two;

export type CreateChatSessionWithChatResultInput = {
    integrationId: string;
    chatSession: ChatSessionInput;
    chatMode?: string | Two | undefined;
    stream?: boolean | undefined;
};

/** @internal */
export const Two$ = z.nativeEnum(Two);

/** @internal */
export namespace ChatMode$ {
    export type Inbound = string | Two;

    export type Outbound = string | Two;

    export const inboundSchema: z.ZodType<ChatMode, z.ZodTypeDef, Inbound> = z.union([
        z.string(),
        Two$,
    ]);

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChatMode> = z.union([
        z.string(),
        Two$,
    ]);
}

/** @internal */
export namespace CreateChatSessionWithChatResultInput$ {
    export type Inbound = {
        integration_id: string;
        chat_session: ChatSessionInput$.Inbound;
        chat_mode?: string | Two | undefined;
        stream?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<
        CreateChatSessionWithChatResultInput,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            integration_id: z.string(),
            chat_session: ChatSessionInput$.inboundSchema,
            chat_mode: z.union([z.string(), Two$]).optional(),
            stream: z.boolean().default(false),
        })
        .transform((v) => {
            return {
                integrationId: v.integration_id,
                chatSession: v.chat_session,
                ...(v.chat_mode === undefined ? null : { chatMode: v.chat_mode }),
                ...(v.stream === undefined ? null : { stream: v.stream }),
            };
        });

    export type Outbound = {
        integration_id: string;
        chat_session: ChatSessionInput$.Outbound;
        chat_mode?: string | Two | undefined;
        stream: boolean;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateChatSessionWithChatResultInput
    > = z
        .object({
            integrationId: z.string(),
            chatSession: ChatSessionInput$.outboundSchema,
            chatMode: z.union([z.string(), Two$]).optional(),
            stream: z.boolean().default(false),
        })
        .transform((v) => {
            return {
                integration_id: v.integrationId,
                chat_session: v.chatSession,
                ...(v.chatMode === undefined ? null : { chat_mode: v.chatMode }),
                stream: v.stream,
            };
        });
}
