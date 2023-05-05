// import { Entity2 } from './path/to/entity2';
import { Contact, User } from "../entities";
import { createTable1683304740900 } from "../migrations/1683304740900-createTable";

export const entities = [User, Contact];

export const migrations = [createTable1683304740900];
