const client = require('..')

client.on("ready", () => {
  console.log(`login as ${client.taq}`);
});