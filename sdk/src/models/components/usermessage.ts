/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type UserMessage = {
    role: "user";
    content: string;
};

/** @internal */
export namespace UserMessage$ {
    export type Inbound = {
        role: "user";
        content: string;
    };

    export const inboundSchema: z.ZodType<UserMessage, z.ZodTypeDef, Inbound> = z
        .object({
            role: z.literal("user"),
            content: z.string(),
        })
        .transform((v) => {
            return {
                role: v.role,
                content: v.content,
            };
        });

    export type Outbound = {
        role: "user";
        content: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UserMessage> = z
        .object({
            role: z.literal("user"),
            content: z.string(),
        })
        .transform((v) => {
            return {
                role: v.role,
                content: v.content,
            };
        });
}
