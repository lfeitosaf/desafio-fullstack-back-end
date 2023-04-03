// import { Entity2 } from './path/to/entity2';
import { Contact, User } from "../entities";
import { createUser1680311491649 as createUser } from "../migrations/1680311491649-createUser";
import { fixUser1680314816741 as fixUser } from "../migrations/1680314816741-fixUser";
import { createContacts1680411034173 as createContacts } from "../migrations/1680411034173-createContacts";
import { fixTelephone1680467368877 as fixTelephone } from "../migrations/1680467368877-fixTelephone";

export const entities = [User, Contact];

export const migrations = [createUser, fixUser, createContacts, fixTelephone];
