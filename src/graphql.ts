
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    getUser(): string | Promise<string>;
}

export interface SuccessType {
    success: boolean;
    message: string;
}

export interface IMutation {
    upload(file?: Nullable<Upload>): Nullable<SuccessType> | Promise<Nullable<SuccessType>>;
}

export type Upload = any;
type Nullable<T> = T | null;
