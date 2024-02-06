type EnMessages = typeof import("./src/messages/en.json");
type PlMessages = typeof import("./src/messages/pl.json");

declare interface IntlMessages extends EnMessages, PlMessages {}
