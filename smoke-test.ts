import { Connection } from "typeorm";
import { Channel } from "./src/entity/Channel";
import { User } from "./src/entity/User";

export async function smokeTest(connection: Connection) {
  const user = new User();
  user.email = "test@test.com";
  user.firstName = "Jan";
  await connection.manager.save(user);

  const channel = new Channel();
  channel.name = "productioncoder";
  channel.user = user;
  await connection.manager.save(channel);
}