// import { Entity2 } from './path/to/entity2';
import { User } from "../entities";
import { createUser1680311491649 as createUser } from "../migrations/1680311491649-createUser";
import { fixUser1680314816741 as fixUser } from "../migrations/1680314816741-fixUser";

export const entities = [User];

export const migrations = [createUser, fixUser];
